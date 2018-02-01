let tri2Dto3D = ( v, h ) => {
  let ret = new Float32Array( v.length / 2 * 3 );
  for ( let i = 0; i < v.length / 2; i ++ ) {
    ret[ i * 3     ] = v[ i * 2     ];
    ret[ i * 3 + 1 ] = v[ i * 2 + 1 ];
    ret[ i * 3 + 2 ] = h;
  }
  return ret;
};

export default tri2Dto3D;