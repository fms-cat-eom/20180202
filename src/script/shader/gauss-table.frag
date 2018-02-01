#define GAUSS_MAX 10.0
#define T_SAMPLES 6
#define R_SAMPLES 6

#define saturate(i) clamp(i,0.,1.)
#define lofi(i,j) floor((i)/(j))*(j)
#define PI 3.14159265
#define TAU 6.28318531

// ------

precision highp float;

uniform vec2 resolution;

float gaussian( float x, float s ) {
  return 1.0 / sqrt( 2.0 * PI * s ) * exp( - x * x / 2.0 / s );
}

void main() {
  float sum = 0.0;
  float val = 0.0;
  int target = int( gl_FragCoord.x );

  float sigma = GAUSS_MAX * gl_FragCoord.y / resolution.y;

  for ( int i = 0; i < R_SAMPLES; i ++ ) {
    float v = gaussian( float( i ), sigma );
    sum += v * ( ( i != 0 ) ? float( T_SAMPLES ) : 1.0 );
    if ( target == i ) { val = v; }
  }

  gl_FragColor = vec4( val / sum, 0.0, 0.0, 1.0 );
}
