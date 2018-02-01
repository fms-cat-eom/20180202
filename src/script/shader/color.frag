#extension GL_EXT_draw_buffers : require
precision highp float;

varying vec3 vPos;

uniform vec4 bgColor;
uniform vec3 color;
uniform vec3 cameraPos;

// ------

void main() {
  float depth = length( vPos - cameraPos );

  gl_FragData[ 0 ] = vec4( color, 1.0 );
  gl_FragData[ 1 ] = vec4( depth, 0.0, 0.0, 1.0 );
}