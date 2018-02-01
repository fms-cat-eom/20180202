let vertTranslater = ( v, x, y ) => {
  for ( let i = 0; i < v.length / 2; i ++ ) {
    v[ i * 2     ] += x;
    v[ i * 2 + 1 ] += y;
  }
};

export default vertTranslater;