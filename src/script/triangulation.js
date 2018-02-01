let EPSILON = 1E-10;
let lerp = ( a, b, x ) => a + ( b - a ) * x;

let Triangulation = class {
  constructor( _vert ) {
    let it = this;

    it.vert = it.initVert( _vert );
    it.vertOri = it.vert.concat();
    it.vertIndex = 0;
    it.lastGood = 0;
    it.tri = [];

    it.finished = false;
  }

  initVert( _vert ) {
    let it = this;

    let vert = [ _vert[ 0 ], _vert[ 1 ] ];
    let sw = true;
    let cue = [];

    for ( let i = 0; i < _vert.length / 2 - 1; i ++ ) {
      let inter = it.findIntersect(
        it.getVert( i, _vert ),
        it.getVert( i + 1, _vert ),
        it.getVert( _vert.length / 2 - 1, _vert ),
        it.getVert( 0, _vert )
      );

      if ( inter ) {
        vert.push( inter.x );
        vert.push( inter.y );
        cue.unshift( inter.y );
        cue.unshift( inter.x );
        sw = !sw;
      }

      if ( sw ) {
        vert.push( _vert[ i * 2 + 2 ] );
        vert.push( _vert[ i * 2 + 3 ] );
      } else {
        cue.unshift( _vert[ i * 2 + 3 ] );
        cue.unshift( _vert[ i * 2 + 2 ] );
      }
    }

    vert = vert.concat( cue );

    return vert;
  }

  reset() {
    let it = this;

    it.vert = it.vertOri.concat();
    it.vertIndex = 0;
    it.tri = [];

    it.finished = false;
  }

  getVert( _index, _array ) {
    let it = this;

    let array = _array || it.vert;
    let len = array.length / 2;
    let i = ( _index + len ) % len;
    return {
      x: array[ i * 2 ],
      y: array[ i * 2 + 1 ]
    };
  }

  getTri( _index ) {
    let it = this;

    let i = _index;
    return {
      x1: it.tri[ i * 6 ],
      y1: it.tri[ i * 6 + 1 ],
      x2: it.tri[ i * 6 + 2 ],
      y2: it.tri[ i * 6 + 3 ],
      x3: it.tri[ i * 6 + 4 ],
      y3: it.tri[ i * 6 + 5 ]
    };
  }

  // ref: http://qiita.com/ykob/items/ab7f30c43a0ed52d16f2
  // ref: http://www.hiramine.com/programming/graphics/2d_segmentintersection.html
  findIntersect( _a, _b, _c, _d ) {
    let a = ( _d.x - _c.x ) * ( _a.y - _c.y ) - ( _d.y - _c.y ) * ( _a.x - _c.x );
    let b = ( _d.x - _c.x ) * ( _b.y - _c.y ) - ( _d.y - _c.y ) * ( _b.x - _c.x );
    let c = ( _b.x - _a.x ) * ( _c.y - _a.y ) - ( _b.y - _a.y ) * ( _c.x - _a.x );
    let d = ( _b.x - _a.x ) * ( _d.y - _a.y ) - ( _b.y - _a.y ) * ( _d.x - _a.x );

    if ( !( c * d < -EPSILON && a * b < -EPSILON ) ) { return null; }

    let pa = a / ( ( _b.x - _a.x ) * ( _d.y - _c.y ) - ( _b.y - _a.y ) * ( _d.x - _c.x ) );
    return {
      x: lerp( _a.x, _b.x, pa ),
      y: lerp( _a.y, _b.y, pa )
    };
  }

  rotate( _v, _r ) {
    return {
      x: _v.x * Math.cos( _r ) - _v.y * Math.sin( _r ),
      y: _v.x * Math.sin( _r ) + _v.y * Math.cos( _r )
    };
  }

  isConvex( _a, _b ) {
    let it = this;

    let r = Math.atan2( _a.y, _a.x );
    let b = it.rotate( _b, -r );
    return b.y < EPSILON;
  }

  isContain( _a, _b, _c, _p ) {
    let a = ( _b.x - _a.x ) * ( _p.y - _b.y ) - ( _b.y - _a.y ) * ( _p.x - _b.x );
    let b = ( _c.x - _b.x ) * ( _p.y - _c.y ) - ( _c.y - _b.y ) * ( _p.x - _c.x );
    let c = ( _a.x - _c.x ) * ( _p.y - _a.y ) - ( _a.y - _c.y ) * ( _p.x - _a.x );

    if ( a === 0 || b === 0 || c === 0 ) {
      return false;
    }

    return Math.sign( a ) === Math.sign( b ) && Math.sign( b ) === Math.sign( c );
  }

  isValid( _index ) {
    let it = this;

    let v0 = it.getVert( _index - 1 );
    let v1 = it.getVert( _index );
    let v2 = it.getVert( _index + 1 );

    // if the vertex is convex
    let va = {
      x: v0.x - v1.x,
      y: v0.y - v1.y
    };
    let vb = {
      x: v2.x - v1.x,
      y: v2.y - v1.y
    };
    if ( !it.isConvex( va, vb ) ) {
      return false;
    }

    // if next/prev vertices are not on current vertices
    {
      {
        let v3 = it.getVert( _index - 2 );
        let vc = {
          x: v0.x - v3.x,
          y: v0.y - v3.y,
        }

        if (
          it.isOnSameLine( v3, v0, v1 )
          && EPSILON < va.x * vc.x + va.y * vc.y
        ) { return false; }
      }

      {
        let v3 = it.getVert( _index + 2 );
        let vc = {
          x: v2.x - v3.x,
          y: v2.y - v3.y,
        }

        if (
          it.isOnSameLine( v1, v2, v3 )
          && EPSILON < vb.x * vc.x + vb.y * vc.y
        ) { return false; }
      }
    }

    // if there are no intersecting vertices
    for ( let i = 0; i < it.vertOri.length / 2; i ++ ) {
      if ( i !== _index - 1 || i !== _index || i !== _index + 1 ) {
        let vp = it.getVert( i );
        if ( it.isContain( v0, v1, v2, vp ) ) {
          return false;
        }
      }

      if ( it.findIntersect(
        v0,
        v2,
        it.getVert( i, it.vertOri ),
        it.getVert( i + 1, it.vertOri )
      ) ) {
        return false;
      }
    }

    return true;
  }

  isOnSameLine( _a, _b, _c ) {
    let d = ( _c.x - _a.x ) * ( _b.y - _a.y ) - ( _c.y - _a.y ) * ( _b.x - _a.x );
    return ( Math.abs( d ) < EPSILON );
  }

  makeTri( _index ) {
    let it = this;

    let a = it.getVert( _index - 1 );
    let b = it.getVert( _index );
    let c = it.getVert( _index + 1 );
    if ( !it.isOnSameLine( a, b, c ) ) {
      it.tri.push( a.x, a.y, b.x, b.y, c.x, c.y );
    }

    it.vert.splice( _index * 2, 2 );
  }

  step() {
    let it = this;

    if ( it.vert.length === 6 ) {
      it.makeTri( 0 );
      it.vert = [];
      it.finished = true;
      return;
    }

    let valid = it.isValid( it.vertIndex );

    if ( valid ) {
      it.makeTri( it.vertIndex );
    } else {
      it.vertIndex ++;
    }

    it.vertIndex = it.vertIndex % ( it.vert.length / 2.0 );
    
    if ( valid ) {
      it.lastGood = it.vertIndex;
    } else if ( it.vertIndex === it.lastGood ) {
      it.vert = [];
      it.finished = true;
    }
  }

  do( _count ) {
    let it = this;

    for ( let i = 0; i < _count; i ++ ) {
      if ( it.finished ) { break; }
      it.step();
    }
  }
};

export default Triangulation;
