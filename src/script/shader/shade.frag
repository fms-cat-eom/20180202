#define saturate(i) clamp(i,0.,1.)

#extension GL_EXT_draw_buffers : require
precision highp float;

varying vec3 vPos;
varying vec3 vNor;
varying vec2 vShadowCoord;

uniform vec4 bgColor;
uniform vec3 color;
uniform vec3 cameraPos;
uniform vec3 lightPos;

uniform bool isShadow;

uniform sampler2D samplerShadow;

// ------

float shadow( float d ) {
  float dc = length( vPos - lightPos );
  float ret = 0.0;
  for ( int iy = -1; iy <= 1; iy ++ ) {
    for ( int ix = -1; ix <= 1; ix ++ ) {
      vec2 uv = vShadowCoord + vec2( float( ix ), float ( iy ) ) * 0.001;
      float proj = texture2D( samplerShadow, uv ).x;
      float bias = 0.1 + ( 1.0 - d ) * 0.3;

      float dif = smoothstep( bias * 2.0, bias, ( dc - proj ) );
      ret += dif / 9.0;
    }
  }
  return ret;
}

void main() {
  if ( isShadow ) {
    float depth = length( vPos - lightPos );
    gl_FragData[ 0 ] = vec4( depth, 0.0, 0.0, 1.0 );
    return;
  }

  vec3 ld = normalize( vPos - lightPos );
  vec3 dif = 200.0 * color * (
    saturate( dot( -vNor, ld ) )
    / pow( length( vPos - lightPos ), 2.0 )
    * mix( 0.2, 1.0, shadow( dot( -vNor, ld ) ) )
  );

  float depth = length( vPos - cameraPos );

  gl_FragData[ 0 ] = vec4( dif, 1.0 );
  gl_FragData[ 1 ] = vec4( depth, 0.0, 0.0, 1.0 );
}