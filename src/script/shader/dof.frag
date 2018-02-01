#define GAUSS_RATE 1.0
#define FOG 0.01
#define R_SAMPLES 6
#define R_INTERVAL 2.0
#define T_OFFSET 0.3
#define T_SAMPLES 6

#define V vec2(0.,1.)
#define saturate(i) clamp(i,0.,1.)
#define lofi(i,j) floor((i)/(j))*(j)
#define PI 3.14159265
#define TAU 6.28318531

// ------

precision highp float;

uniform vec2 resolution;
uniform sampler2D sampler0;
uniform sampler2D samplerPreDof;
uniform sampler2D samplerDepth;
uniform sampler2D samplerGaussTable;
uniform vec4 bgColor;
uniform float focus;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;

  vec3 sum = V.xxx;
  vec3 ccol = vec3( 0.0 );
  float clen = 1E9;
  for ( int ir = 0; ir < R_SAMPLES; ir ++ ) {
    for ( int it = 0; it < T_SAMPLES; it ++ ) {
      float theta = T_OFFSET + TAU * float( it ) / float( T_SAMPLES );
      vec2 delta = R_INTERVAL * float( ir ) * vec2( cos( theta ), sin( theta ) );
      bool center = ir == 0;
      vec2 v = saturate( uv + delta / resolution );

      float len = texture2D( samplerDepth, v ).x;

      float gauss = min( GAUSS_RATE * abs( 1.0 / focus - 1.0 / len ), 1.0 );
      float mul = texture2D( samplerGaussTable, vec2( ( float( ir ) + 0.5 ) / float( R_SAMPLES ), gauss ) ).x;

      vec3 tex = mix(
        texture2D( samplerPreDof, v ),
        texture2D( sampler0, v ),
        smoothstep( 0.0, 0.2, mul )
      ).xyz;
      vec3 col = mix( bgColor.xyz, tex, exp( -len * FOG ) );

      sum += col * saturate( mul );

      if ( center ) {
        break;
      }
    }
  }

  gl_FragColor = vec4( sum, 1.0 );
}
