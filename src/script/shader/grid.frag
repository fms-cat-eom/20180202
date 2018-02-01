#define MARCH_ITER 60
#define MARCH_MULT 0.7

#define PI 3.14159265
#define saturate(i) clamp(i,0.,1.)
#define lofi(i,m) (floor((i)/(m))*(m))

#extension GL_EXT_frag_depth : require
#extension GL_EXT_draw_buffers : require
precision highp float;

uniform vec2 resolution;
uniform vec3 color;

uniform vec3 cameraPos;
uniform vec3 cameraTar;
uniform float cameraFov;
uniform float cameraNear;
uniform float cameraFar;
uniform float cameraRoll;
uniform vec3 lightPos;

uniform float circleRotate;
uniform float circleExpand;
uniform float circleInterval;

uniform mat4 matPL;
uniform mat4 matVL;

uniform bool isShadow;

uniform sampler2D samplerShadow;

// ------

mat2 rotate2D( float _t ) {
  return mat2(
    cos( _t ), sin( _t ),
    -sin( _t ), cos( _t )
  );
}

float random( vec2 _uv ) {
  return fract( sin( dot( vec2( 12.563, 21.864 ), _uv ) ) * 194.5134 );
}

// ------

struct Camera {
  vec3 pos;
  vec3 dir;
  vec3 sid;
  vec3 top;
};

struct Ray {
  vec3 dir;
  vec3 ori;
};

// ------

Camera camInit( in vec3 _pos, in vec3 _tar, in float _roll ) {
  Camera cam;
  cam.pos = _pos;
  cam.dir = normalize( _tar - _pos );
  cam.sid = normalize( cross( cam.dir, vec3( 0.0, 1.0, 0.0 ) ) );
  cam.top = normalize( cross( cam.sid, cam.dir ) );
  cam.sid = cos( _roll ) * cam.sid + sin( _roll ) * cam.top;
  cam.top = normalize( cross( cam.sid, cam.dir ) );

  return cam;
}

Ray rayInit( in vec3 _ori, in vec3 _dir ) {
  Ray ray;
  ray.dir = _dir;
  ray.ori = _ori;
  return ray;
}

Ray rayFromCam( in vec2 _p, in Camera _cam, in float _fov ) {
  vec3 dir = normalize(
    _p.x * _cam.sid
    + _p.y * _cam.top
    + _cam.dir / tan( _fov * PI / 360.0 )
  );
  return rayInit( _cam.pos, dir );
}

// ------

float distFuncSphere( vec3 _p, float _r ) {
  return length( _p ) - _r;
}

float distFuncBox( vec3 _p, vec3 _s ) {
  vec3 d = abs( _p ) - _s;
  return min( max( d.x, max( d.y, d.z ) ), 0.0 ) + length( max( d, 0.0 ) );
}

vec3 circleRep( vec3 _p, float _r, float _c ) {
  vec3 p = _p;
  float intrv = PI * 2.0 / _c;
  p.zx = rotate2D( floor( atan( p.z, p.x ) / intrv ) * intrv ) * p.zx;
  p.zx = rotate2D( intrv / 2.0 ) * p.zx;
  p.x -= _r;
  return p;
}

float distFunc( vec3 _p ) {
  float dist = 1E9;

  { // grid
    float m = ( 5.25 ) / 2.0;
    vec3 p = mod( _p - vec3( 0.0, 0.0, m / 2.0 ), m ) - m / 2.0;
    dist = distFuncSphere( p, 0.08 );
  }

  { // circle
    vec3 p = _p;

    p.yz = rotate2D( PI / 2.0 ) * p.yz;

    float m = circleInterval;
    float mi = floor( p.y / m );

    float spd = cos( mi * 2.9 );
    float h = 0.3 + 0.1 * cos( mi * 1.2 + 0.7 );
    float w = 0.2 + 0.1 * cos( mi * 1.3 + 0.2 );
    float rep = floor( 16.0 + 8.0 * cos( mi * 2.7 + 1.4 ) );
    float rad = 6.0 + 1.0 * cos( mi * 1.3 );

    p.zx = rotate2D( circleRotate * spd ) * p.zx;

    p.y = ( p.y - mi * m ) - m / 2.0;
    p = circleRep( p, rad, rep );
    dist = min( dist, distFuncBox( p, circleExpand * vec3( w, h, w ) ) );
  }

  return dist;
}

vec3 normalFunc( in vec3 _p ) {
  vec2 d = vec2( 0.0, 1.0 ) * 1E-4;
  return normalize( vec3(
    distFunc( _p + d.yxx ) - distFunc( _p - d.yxx ),
    distFunc( _p + d.xyx ) - distFunc( _p - d.xyx ),
    distFunc( _p + d.xxy ) - distFunc( _p - d.xxy )
  ) );
}

// ------

float shadow( vec3 p, float d ) {
  float dc = length( p - lightPos );

  vec4 posFromLight = matPL * matVL * vec4( p, 1.0 );
  vec2 shadowCoord = posFromLight.xy / posFromLight.w * 0.5 + 0.5;

  float ret = 0.0;
  for ( int iy = -1; iy <= 1; iy ++ ) {
    for ( int ix = -1; ix <= 1; ix ++ ) {
      vec2 uv = shadowCoord + vec2( float( ix ), float ( iy ) ) * 0.01;
      float proj = texture2D( samplerShadow, uv ).x;
      float bias = 0.1 + ( 1.0 - d ) * 0.3;

      float dif = smoothstep( bias * 2.0, bias, ( dc - proj ) );
      ret += dif / 9.0;
    }
  }
  return ret;
}

void main() {
  vec2 p = ( gl_FragCoord.xy * 2.0 - resolution ) / resolution.y;

  Camera cam = camInit( cameraPos, cameraTar, cameraRoll );
  Ray ray = rayFromCam( p, cam, cameraFov );

  float rayLen = cameraNear;
  vec3 rayPos = ray.ori + rayLen * ray.dir;
  float dist = 0.0;

  for ( int i = 0; i < MARCH_ITER; i ++ ) {
    dist = distFunc( rayPos );
    rayLen += dist * MARCH_MULT;
    rayPos = ray.ori + rayLen * ray.dir;

    if ( cameraFar < rayLen ) { break; }
    if ( abs( dist ) < 1E-5 ) { break; }
  }

  if ( 1E-4 < dist ) { discard; }

  if ( isShadow ) {
    float depth = length( rayPos - lightPos );
    gl_FragData[ 0 ] = vec4( depth, 0.0, 0.0, 1.0 );
    return;
  }

  vec3 nor = normalFunc( rayPos );

  vec3 ld = normalize( rayPos - lightPos );
  vec3 dif = 200.0 * color * (
    saturate( dot( -nor, ld ) )
    / pow( length( rayPos - lightPos ), 2.0 )
    * mix( 0.2, 1.0, shadow( rayPos, dot( -nor, ld ) ) )
  );

  gl_FragData[ 0 ] = vec4( dif, 1.0 );
  gl_FragData[ 1 ] = vec4( rayLen, 0.0, 0.0, 1.0 );

  {
    float a = ( cameraFar + cameraNear ) / ( cameraFar - cameraNear );
    float b = 2.0 * cameraFar * cameraNear / ( cameraFar - cameraNear );
    float z = dot( cam.dir, rayPos - cam.pos );
    gl_FragDepthEXT = ( a - b / z ) * 0.5 + 0.5;
  }
}
