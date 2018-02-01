let extrudePath = ( v, top, bottom ) => {
  let paths = v.length / 2;

  let pos = new Float32Array( paths * 18 );
  let nor = new Float32Array( paths * 18 );

  for ( let i = 0; i < paths; i ++ ) {
    let x0 = v[ i * 2 ];
    let y0 = v[ i * 2 + 1 ];
    let x1 = v[ ( ( i + 1 ) % paths ) * 2 ];
    let y1 = v[ ( ( i + 1 ) % paths ) * 2 + 1 ];
    pos[ i * 18      ] = x0;
    pos[ i * 18 +  1 ] = y0;
    pos[ i * 18 +  2 ] = bottom;
    pos[ i * 18 +  3 ] = x1;
    pos[ i * 18 +  4 ] = y1;
    pos[ i * 18 +  5 ] = bottom;
    pos[ i * 18 +  6 ] = x1;
    pos[ i * 18 +  7 ] = y1;
    pos[ i * 18 +  8 ] = top;
    pos[ i * 18 +  9 ] = x0;
    pos[ i * 18 + 10 ] = y0;
    pos[ i * 18 + 11 ] = bottom;
    pos[ i * 18 + 12 ] = x1;
    pos[ i * 18 + 13 ] = y1;
    pos[ i * 18 + 14 ] = top;
    pos[ i * 18 + 15 ] = x0;
    pos[ i * 18 + 16 ] = y0;
    pos[ i * 18 + 17 ] = top;

    let dx = x1 - x0;
    let dy = y1 - y0;
    let l = Math.sqrt( dx * dx + dy * dy );
    let nx = dy / l;
    let ny = -dx / l;
    for ( let j = 0; j < 6; j ++ ) {
      nor[ i * 18 + j * 3     ] = nx;
      nor[ i * 18 + j * 3 + 1 ] = ny;
      nor[ i * 18 + j * 3 + 2 ] = 0;
    }
  }

  return {
    pos: pos,
    nor: nor
  };
};

export default extrudePath;