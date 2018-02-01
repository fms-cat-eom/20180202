#define HUGE 9E16
#define PI 3.14159265
#define V vec3(0.,1.,-1.)
#define saturate(i) clamp(i,0.,1.)
#define lofi(i,m) (floor((i)/(m))*(m))

// ------

attribute vec2 computeUV;
attribute vec3 primPos;
attribute vec3 primNor;

varying vec3 vPos;
varying vec3 vNor;
varying vec3 vPrimPos;
varying vec3 vPrimNor;
varying float vLife;
varying float vSize;
varying vec2 vShadowCoord;

uniform vec2 resolution;
uniform vec2 resolutionPcompute;
uniform vec3 cameraPos;
uniform float cameraFov;
uniform mat4 matP;
uniform mat4 matV;
uniform mat4 matPL;
uniform mat4 matVL;

uniform bool isShadow;

uniform sampler2D samplerPcompute;

// ------

mat2 rotate2D( float _t ) {
  return mat2( cos( _t ), sin( _t ), -sin( _t ), cos( _t ) );
}

void main() {
  vec2 puv = ( computeUV.xy + 0.5 ) / resolutionPcompute;
  vec2 dppix = vec2( 1.0 ) / resolutionPcompute;

  vec4 pos = texture2D( samplerPcompute, puv );
  vec4 vel = texture2D( samplerPcompute, puv + dppix * vec2( 1.0, 0.0 ) );
  vec4 rot = texture2D( samplerPcompute, puv + dppix * vec2( 2.0, 0.0 ) );

  vec3 primPosD = primPos;
  vec3 primNorD = primNor;

  vPrimPos = primPos;
  vPrimNor = primNor;

  primPosD.zx = rotate2D( rot.y ) * primPosD.zx;
  primPosD.yz = rotate2D( rot.x ) * primPosD.yz;
  primPosD.xy = rotate2D( PI / 4.0 ) * primPosD.xy;
  primNorD.zx = rotate2D( rot.y ) * primNorD.zx;
  primNorD.yz = rotate2D( rot.x ) * primNorD.yz;
  primNorD.xy = rotate2D( PI / 4.0 ) * primNorD.xy;

  primPosD.xyz *= 0.3 * (
    vel.w * sin( PI * pos.w ) *
    ( 1.0 - exp( -length( cameraPos - pos.xyz ) ) )
  );
  pos.xyz += primPosD.xyz;

  vPos = pos.xyz;
  vNor = primNorD.xyz;
  vLife = pos.w;
  vSize = vel.w;

  vec4 outPos;
  if ( isShadow ) {
    outPos = matPL * matVL * vec4( pos.xyz, 1.0 );
  } else {
    outPos = matP * matV * vec4( pos.xyz, 1.0 );

    vec4 posFromLight = matPL * matVL * vec4( pos.xyz, 1.0 );
    vShadowCoord = posFromLight.xy / posFromLight.w * 0.5 + 0.5;
  }

  gl_Position = outPos;
}