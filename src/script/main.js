import xorshift from "./libs/xorshift";
import Tweak from "./libs/tweak";
import GLCat from "./libs/glcat";
import GLCatPath from "./libs/glcat-path-gui";
import MathCat from "./libs/mathcat";

import Triangulation from "./triangulation";
import TriangulationDrawer from "./triangulation-drawer";
import VertPhaser from "./vertphaser";
import translateArray2D from "./translate-array-2d";
import letters from "./letters";
import tri2Dto3D from "./tri-2d-to-3d";
import extrudePath from "./extrude-path";

let glslify = require( "glslify" );

// ------

xorshift( 326789157890 );

// ------

let tweak = new Tweak( divTweak );

// ------

let mouseX = 0.0;
let mouseY = 0.0;

canvas.addEventListener( "mousemove", ( event ) => {
  mouseX = event.offsetX;
  mouseY = event.offsetY;
} );

// ------

let clamp = ( v, b, t ) => Math.min( Math.max( v, b ), t );
let lerp = ( a, b, x ) => a + ( b - a ) * x;
let saturate = ( v ) => clamp( v, 0.0, 1.0 );

// ------

let width = canvas.width = 360;
let height = canvas.height = 360;

let renderA = document.createElement( "a" );

let saveFrame = () => {
  renderA.href = canvas.toDataURL();
  renderA.download = ( "0000" + totalFrame ).slice( -5 ) + ".png";
  renderA.click();
};

// ------

let totalFrame = 0;
let init = false;
let frames = 200;

let automaton = new Automaton( {
  gui: divAutomaton,
  fps: frames,
  data: `
  {"v":"1.1.1","length":1,"resolution":1000,"params":{"focus":[{"time":0,"value":7.5,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":1,"value":7.5,"mode":0,"params":{},"mods":[false,false,false,false]}],"phase":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":0.1,"value":0,"mode":4,"params":{"rate":100,"damp":1},"mods":[false,false,false,false]},{"time":0.2434446615739918,"value":0.7445249695708784,"mode":4,"params":{"rate":180,"damp":1},"mods":[false,false,false,false]},{"time":0.5242494226327945,"value":1.073071156866888,"mode":4,"params":{"rate":100,"damp":1},"mods":[false,false,false,false]},{"time":0.5904334695327768,"value":0.9325623557619429,"mode":4,"params":{"rate":100,"damp":1},"mods":[false,false,false,false]},{"time":0.6527180671522473,"value":0.8156580296547518,"mode":5,"params":{"gravity":38,"bounce":0.3},"mods":[false,false,false,false]},{"time":0.9538461538461539,"value":0.4256187444023234,"mode":4,"params":{"rate":3800.11,"damp":0.2},"mods":[false,false,false,false]},{"time":1,"value":0.22384196700163095,"mode":4,"params":{"rate":600,"damp":1},"mods":[false,false,false,false]}],"lightPosX":[{"time":0,"value":-8.233072876571146,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":0.04807692307692314,"value":16.914799501152157,"mode":4,"params":{"rate":800,"damp":1},"mods":[false,false,false,false]},{"time":0.24423076923076925,"value":1.488284931408426,"mode":4,"params":{"rate":69,"damp":1},"mods":[false,false,false,false]},{"time":0.6461538461538462,"value":-4.485607544114525,"mode":4,"params":{"rate":20,"damp":1},"mods":[false,false,false,false]},{"time":1,"value":-11.208334466250678,"mode":4,"params":{"rate":100,"damp":1},"mods":[false,false,false,false]}],"cameraPosX":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":1,"value":-5.551115123125783e-17,"mode":4,"params":{"rate":50,"damp":1},"mods":[false,false,{"freq":1,"amp":0.5,"reso":3,"recursion":2,"seed":1466},false]}],"cameraPosY":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":1,"value":0,"mode":4,"params":{"rate":50,"damp":1},"mods":[false,false,{"freq":1,"amp":0.5,"reso":3,"recursion":2,"seed":18},false]}],"cameraZ":[{"time":0,"value":17.5,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":0.059662100675462806,"value":9.678623821993014,"mode":3,"params":{"factor":13},"mods":[false,false,false,false]},{"time":0.6882217090069284,"value":7.284647425377673,"mode":4,"params":{"rate":410,"damp":1},"mods":[false,false,false,false]},{"time":0.8488452655889146,"value":8.070772917374319,"mode":4,"params":{"rate":68,"damp":1},"mods":[false,false,false,false]},{"time":1,"value":-3.5,"mode":5,"params":{"gravity":990,"bounce":0},"mods":[false,false,false,false]}],"circleRotate":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":1,"value":3.076718553812715,"mode":4,"params":{"rate":20,"damp":1},"mods":[false,false,false,false]}],"circleExpand":[{"time":0,"value":-0.01313111375983838,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":0.18846153846153846,"value":-0.0057380170585480395,"mode":4,"params":{"rate":500,"damp":1},"mods":[false,false,false,false]},{"time":0.9019230769230769,"value":1,"mode":4,"params":{"rate":500,"damp":1},"mods":[false,false,false,false]},{"time":1,"value":-0.5894487816176757,"mode":4,"params":{"rate":500,"damp":1},"mods":[false,false,false,false]}],"circleInterval":[{"time":0,"value":2.5,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":0.15384615384615385,"value":2.5,"mode":0,"params":{},"mods":[false,false,false,false]},{"time":0.6153846153846154,"value":1.3,"mode":4,"params":{"rate":500,"damp":1},"mods":[{"velocity":0},false,false,false]},{"time":1,"value":1.3,"mode":4,"params":{"rate":100,"damp":1},"mods":[false,false,false,false]}],"ふきとばす":[{"time":0,"value":200,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":0.85,"value":0,"mode":4,"params":{"rate":100,"damp":1},"mods":[false,false,false,false]},{"time":1,"value":200,"mode":2,"params":{},"mods":[false,false,false,false]}],"cameraRoll":[{"time":0,"value":0,"mode":1,"params":{},"mods":[false,false,false,false]},{"time":1,"value":0,"mode":1,"params":{},"mods":[false,false,{"freq":1,"amp":0.01,"reso":4.6,"recursion":2,"seed":20006.8},false]}]},"gui":{"snap":{"enable":false,"bpm":120,"offset":0}}}
`
} );
let auto = automaton.auto;

// ------

let cameraPos = [ 0.0, 0.0, 8.0 ];
let cameraTar = [ 0.0, 0.0, 0.0 ];
let cameraRoll = 0.0;
let cameraFov = 70.0;

let cameraNear = 0.1;
let cameraFar = 100.0;

let lightPos = [ 10.0, 8.0, 10.0 ];

let matP;
let matV;
let matPL;
let matVL;

let updateMatrices = () => {
  cameraPos[ 0 ] = auto( "cameraPosX" );
  cameraPos[ 1 ] = auto( "cameraPosY" );
  cameraPos[ 2 ] = auto( "cameraZ" );
  cameraTar[ 2 ] = auto( "cameraZ" ) - 5.0;
  lightPos[ 0 ] = auto( "lightPosX" );
  lightPos[ 2 ] = auto( "cameraZ" ) + 5.0;
  cameraRoll = auto( "cameraRoll" );

  matP = MathCat.mat4Perspective( cameraFov, width / height, cameraNear, cameraFar );
  matV = MathCat.mat4LookAt( cameraPos, cameraTar, [ 0.0, 1.0, 0.0 ], cameraRoll );

  matPL = MathCat.mat4Perspective( cameraFov, 1.0, cameraNear, cameraFar );
  matVL = MathCat.mat4LookAt( lightPos, cameraTar, [ 0.0, 1.0, 0.0 ], 0.0 );
};
updateMatrices();

// ------

let gl = canvas.getContext( 'webgl' );
gl.enable( gl.CULL_FACE );

let glCat = new GLCat( gl );

glCat.getExtension( "OES_texture_float", true );
glCat.getExtension( "OES_texture_float_linear", true );
glCat.getExtension( "EXT_frag_depth", true );
glCat.getExtension( "WEBGL_draw_buffers", true );
glCat.getExtension( "ANGLE_instanced_arrays", true );

let glCatPath = new GLCatPath( glCat, {
  drawbuffers: true,
  el: divPath,
  canvas: canvas,
  stretch: true
} );

// ------

let vboQuad = glCat.createVertexbuffer( [ -1, -1, 1, -1, -1, 1, 1, 1 ] );
let vboQuadUV = glCat.createVertexbuffer( [ 0, 1, 1, 1, 0, 0, 1, 0 ] );
let vboQuad3 = glCat.createVertexbuffer( [ -1, -1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0 ] );
let vboQuad3Nor = glCat.createVertexbuffer( [ 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1 ] );

let vboTextPos = glCat.createVertexbuffer( false );
let vboTextNor = glCat.createVertexbuffer( false );

// ------

let vboLunaPos, vboLunaNor, lunaLen;
{
  let lunaPath = [
    -1, -1, -1, -3,  1, -3,
     1, -1,  3, -1,  3,  1,
     1,  1,  1,  3, -1,  3,
    -1,  1, -3,  1, -3, -1
  ];
  let lunaTri = new Triangulation( lunaPath );
  lunaTri.do( 100 );
  let lunaExt = extrudePath( lunaPath, 1, -1 );

  let pos = Array.from( tri2Dto3D( lunaTri.tri, 1 ) );
  pos.push( ...pos.map( ( v, i ) => i % 3 === 1 ? v : -v ) );
  pos.push( ...lunaExt.pos );

  let nor = [];
  for ( let i = 0; i < lunaTri.tri.length / 2; i ++ ) {
    nor.push( 0, 0, 1 );
  }
  for ( let i = 0; i < lunaTri.tri.length / 2; i ++ ) {
    nor.push( 0, 0, -1 );
  }
  nor.push( ...lunaExt.nor );
  
  vboLunaPos = glCat.createVertexbuffer( pos );
  vboLunaNor = glCat.createVertexbuffer( nor );
  lunaLen = pos.length;
}

// ------

let particlePixels = 3;
let particlesSqrt = 64;
let particles = particlesSqrt * particlesSqrt;
let vertsPerParticle = lunaLen / 3;

let vboParticleUV = glCat.createVertexbuffer( ( () => {
  let ret = [];
  for ( let i = 0; i < particles; i ++ ) {
    let ix = i % particlesSqrt;
    let iy = Math.floor( i / particlesSqrt );
    
    ret.push( ix * particlePixels );
    ret.push( iy );
  }
  return ret;
} )() );

// ------

let textureDummy = glCat.createTexture();
glCat.setTextureFromArray( textureDummy, 1, 1, [ 1, 0, 1, 1 ] );

let textureRandomSize = 32;
let textureRandomUpdate = ( _tex ) => {
  glCat.setTextureFromArray( _tex, textureRandomSize, textureRandomSize, ( () => {
    let len = textureRandomSize * textureRandomSize * 4;
    let ret = new Uint8Array( len );
    for ( let i = 0; i < len; i ++ ) {
      ret[ i ] = Math.floor( xorshift() * 256.0 );
    }
    return ret;
  } )() );
};

let textureRandomStatic = glCat.createTexture();
glCat.textureWrap( textureRandomStatic, gl.REPEAT );
textureRandomUpdate( textureRandomStatic );

let textureRandom = glCat.createTexture();
glCat.textureWrap( textureRandom, gl.REPEAT );

// ------

let framebuffersGauss = [
  glCat.createFloatFramebuffer( width / 4, height / 4 ),
  glCat.createFloatFramebuffer( width / 4, height / 4 ),
  glCat.createFloatFramebuffer( width / 4, height / 4 )
];

let framebufferPreDof = glCat.createFloatFramebuffer( width, height );

let framebufferMotionPrev = glCat.createFramebuffer( width, height );
let framebufferMotionMosh = glCat.createFramebuffer( width, height );

let shadowSize = 512;

// ------

let bgColor = [ 0.01, 0.01, 0.01, 1.0 ];

// ------

glCatPath.setGlobalFunc( () => {
  glCat.uniform1i( 'init', init );
  glCat.uniform1f( 'time', automaton.time );
  glCat.uniform1f( 'deltaTime', automaton.deltaTime );

  glCat.uniform1f( 'frame', automaton.frame );
  glCat.uniform1f( 'frames', frames );

  glCat.uniform2fv( 'mouse', [ mouseX, mouseY ] );

  glCat.uniform3fv( 'cameraPos', cameraPos );
  glCat.uniform3fv( 'cameraTar', cameraTar );
  glCat.uniform1f( 'cameraRoll', cameraRoll );
  glCat.uniform1f( 'cameraFov', cameraFov );
  glCat.uniform1f( 'cameraNear', cameraNear );
  glCat.uniform1f( 'cameraFar', cameraFar );
  glCat.uniform3fv( 'lightPos', lightPos );

  glCat.uniform1f( 'particlesSqrt', particlesSqrt );
  glCat.uniform1f( 'particlePixels', particlePixels );

  glCat.uniformMatrix4fv( 'matP', matP );
  glCat.uniformMatrix4fv( 'matV', matV );
  glCat.uniformMatrix4fv( 'matPL', matPL );
  glCat.uniformMatrix4fv( 'matVL', matVL );
  glCat.uniform4fv( 'bgColor', bgColor );
} );

glCatPath.add( {
  return: {
    width: width,
    height: height,
    vert: glslify( './shader/quad.vert' ),
    frag: glslify( './shader/return.frag' ),
    blend: [ gl.ONE, gl.ZERO ],
    clear: [ 0.0, 0.0, 0.0, 1.0 ],
    func: ( path, params ) => {
      glCat.attribute( 'p', vboQuad, 2 );
      glCat.uniformTexture( 'sampler0', params.input, 0 );
      gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
    }
  },

  inspector: {
    width: width,
    height: height,
    vert: glslify( './shader/quad.vert' ),
    frag: glslify( './shader/inspector.frag' ),
    blend: [ gl.ONE, gl.ZERO ],
    clear: [ 0.0, 0.0, 0.0, 1.0 ],
    func: ( path, params ) => {
      glCat.attribute( 'p', vboQuad, 2 );
      glCat.uniform3fv( 'circleColor', [ 1.0, 1.0, 1.0 ] );
      glCat.uniformTexture( 'sampler0', params.input, 0 );
      gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
    }
  },

  gaussTable: {
    width: 6, // radius of dof
    height: 256,
    vert: glslify( './shader/quad.vert' ),
    frag: glslify( './shader/gauss-table.frag' ),
    blend: [ gl.ONE, gl.ZERO ],
    clear: [ 0.0, 0.0, 0.0, 1.0 ],
    framebuffer: true,
    float: true,
    func: ( path, params ) => {
      glCat.attribute( 'p', vboQuad, 2 );
      gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
    }
  },

  "🐬": {
    width: width,
    height: height,
    vert: glslify( './shader/quad.vert' ),
    frag: glslify( './shader/bg.frag' ),
    blend: [ gl.ONE, gl.ZERO ],
    clear: [ 0.0, 0.0, 0.0, 1.0 ],
    framebuffer: true,
    drawbuffers: 2,
    float: true,
    func: () => {
      glCat.attribute( 'p', vboQuad, 2 );
      gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
    }
  },

  "影": {
    width: shadowSize,
    height: shadowSize,
    vert: glslify( './shader/quad.vert' ),
    frag: glslify( './shader/return.frag' ),
    blend: [ gl.ONE, gl.ZERO ],
    clear: [ cameraFar, 0.0, 0.0, 1.0 ],
    framebuffer: true,
    drawbuffers: 2,
    float: true,
    func: () => {}
  },

  grid: {
    width: width,
    height: height,
    vert: glslify( './shader/quad.vert' ),
    frag: glslify( './shader/grid.frag' ),
    drawbuffers: 2,
    blend: [ gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA ],
    func: ( path, params ) => {
      glCat.attribute( 'p', vboQuad, 2 );

      glCat.uniform1f( 'circleRotate', auto( "circleRotate" ) );
      glCat.uniform1f( 'circleExpand', auto( "circleExpand" ) );
      glCat.uniform1f( 'circleInterval', auto( "circleInterval" ) );
      
      glCat.uniform1i( 'isShadow', params.isShadow );
      if ( !params.isShadow ) {
        glCat.uniformTexture( 'samplerShadow', glCatPath.fb( "影" ).textures[ 0 ], 0 );
      } else {
        glCat.uniformTexture( 'samplerShadow', textureDummy, 0 );
      }
      
      glCat.uniform3fv( 'color', [ 2.8, 0.2, 0.7 ] ); // illegal
      gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
    }
  },

  text: {
    width: width,
    height: height,
    vert: glslify( './shader/object.vert' ),
    frag: glslify( './shader/shade.frag' ),
    drawbuffers: 2,
    blend: [ gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA ],
    func: ( path, params ) => {
      if ( 0 < vboTextPos.length ) {
        glCat.attribute( 'pos', vboTextPos, 3 );
        glCat.attribute( 'nor', vboTextNor, 3 );
        
        let matM = MathCat.mat4Identity();
        matM = MathCat.mat4Apply( MathCat.mat4ScaleXYZ( 1.0 / 2.0 ), matM );
        glCat.uniformMatrix4fv( 'matM', matM );

        glCat.uniform1i( 'isShadow', params.isShadow );
        if ( !params.isShadow ) {
          glCat.uniformTexture( 'samplerShadow', glCatPath.fb( "影" ).textures[ 0 ], 0 );
        } else {
          glCat.uniformTexture( 'samplerShadow', textureDummy, 0 );
        }
        glCat.uniform3fv( 'color', [ 0.8, 0.8, 0.8 ] );
        gl.drawArrays( gl.TRIANGLES, 0, vboTextPos.length / 3 );
      }
    }
  },

  particlesComputeReturn: {
    width: particlesSqrt * particlePixels,
    height: particlesSqrt,
    vert: glslify( './shader/quad.vert' ),
    frag: glslify( './shader/return.frag' ),
    blend: [ gl.ONE, gl.ZERO ],
    clear: [ 0.0, 0.0, 0.0, 0.0 ],
    framebuffer: true,
    float: true,
    func: ( path, params ) => {
      glCat.attribute( 'p', vboQuad, 2 );
      glCat.uniformTexture( 'sampler0', glCatPath.fb( "particlesCompute" ).texture, 0 );
      gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
    }
  },

  particlesCompute: {
    width: particlesSqrt * particlePixels,
    height: particlesSqrt,
    vert: glslify( './shader/quad.vert' ),
    frag: glslify( './shader/particles-compute.frag' ),
    blend: [ gl.ONE, gl.ZERO ],
    clear: [ 0.0, 0.0, 0.0, 0.0 ],
    framebuffer: true,
    float: true,
    func: ( path, params ) => {
      glCat.attribute( 'p', vboQuad, 2 );
      glCat.uniform1f( 'fukitobasu', auto( "ふきとばす" ) );
      glCat.uniformTexture( 'samplerPcompute', glCatPath.fb( "particlesComputeReturn" ).texture, 0 );
      glCat.uniformTexture( 'samplerRandom', textureRandom, 1 );
      gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
    }
  },
  
  particlesRender: {
    width: width,
    height: height,
    vert: glslify( './shader/particles-render.vert' ),
    frag: glslify( './shader/particles-render.frag' ),
    drawbuffers: 2,
    blend: [ gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA ],
    func: ( path, params ) => {
      glCat.attribute( 'computeUV', vboParticleUV, 2, 1 );
      glCat.attribute( 'primPos', vboLunaPos, 3 );
      glCat.attribute( 'primNor', vboLunaNor, 3 );

      glCat.uniform2fv( 'resolutionPcompute', [ particlesSqrt * particlePixels, particlesSqrt ] );
      glCat.uniformTexture( 'samplerPcompute', glCatPath.fb( "particlesCompute" ).texture, 1 );

      glCat.uniform1i( 'isShadow', params.isShadow );
      if ( !params.isShadow ) {
        glCat.uniformTexture( 'samplerShadow', glCatPath.fb( "影" ).textures[ 0 ], 0 );
      } else {
        glCat.uniformTexture( 'samplerShadow', textureDummy, 0 );
      }

      let ext = glCat.getExtension( "ANGLE_instanced_arrays" );
      ext.drawArraysInstancedANGLE( gl.TRIANGLES, 0, vertsPerParticle, particles );
    }
  },
  
  fxaa: {
    width: width,
    height: height,
    vert: glslify( './shader/quad.vert' ),
    frag: glslify( './shader/fxaa.frag' ),
    clear: [ 0.0, 0.0, 0.0, 1.0 ],
    framebuffer: true,
    float: true,
    blend: [ gl.ONE, gl.ZERO ],
    func: ( path, params ) => {
      glCat.attribute( 'p', vboQuad, 2 );
      glCat.uniformTexture( 'sampler0', params.input, 0 );
      gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
    }
  },
  
  gauss: {
    width: width,
    height: height,
    vert: glslify( './shader/quad.vert' ),
    frag: glslify( './shader/gauss.frag' ),
    clear: [ 0.0, 0.0, 0.0, 1.0 ],
    tempFb: glCat.createFloatFramebuffer( width, height ),
    blend: [ gl.ONE, gl.ZERO ],
    func: ( path, params ) => {
      if ( params.width && params.height ) {
        glCat.resizeFloatFramebuffer( path.tempFb, params.width, params.height );
      }

      gl.bindFramebuffer( gl.FRAMEBUFFER, path.tempFb.framebuffer );
      glCat.clear( ...path.clear );

      glCat.attribute( 'p', vboQuad, 2 );
      glCat.uniformTexture( 'sampler0', params.input, 0 );
      glCat.uniform1f( 'var', params.var );
      glCat.uniform1i( 'isVert', 0 );
      gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
      
      gl.bindFramebuffer( gl.FRAMEBUFFER, params.framebuffer );

      glCat.attribute( 'p', vboQuad, 2 );
      glCat.uniformTexture( 'sampler0', path.tempFb.texture, 0 );
      glCat.uniform1f( 'var', params.var );
      glCat.uniform1i( 'isVert', 1 );
      gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
    }
  },
  
  dof: {
    width: width,
    height: height,
    vert: glslify( './shader/quad.vert' ),
    frag: glslify( './shader/dof.frag' ),
    blend: [ gl.ONE, gl.ZERO ],
    clear: [ 0.0, 0.0, 0.0, 0.0 ],
    framebuffer: true,
    float: true,
    func: ( path, params ) => {
      glCat.attribute( 'p', vboQuad, 2 );
      glCat.uniform1f( 'focus', auto( 'focus' ) );
      glCat.uniformTexture( 'samplerDry', params.dry, 0 );
      glCat.uniformTexture( 'samplerPreDof', params.predof, 1 );
      glCat.uniformTexture( 'samplerDepth', params.depth, 2 );
      glCat.uniformTexture( 'samplerGaussTable', glCatPath.fb( "gaussTable" ).texture, 3 );
      gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
    }
  },
  
  "Gowrock - bloom": {
    width: width / 4.0,
    height: height / 4.0,
    vert: glslify( './shader/quad.vert' ),
    frag: glslify( './shader/bloom.frag' ),
    blend: [ gl.ONE, gl.ZERO ],
    clear: [ 0.0, 0.0, 0.0, 0.0 ],
    tempFb: glCat.createFloatFramebuffer( width / 4.0, height / 4.0 ),
    framebuffer: true,
    float: true,
    func: ( path, params ) => {
      for ( let i = 0; i < 3; i ++ ) {
        let gaussVar = [ 5.0, 15.0, 40.0 ][ i ];
        gl.bindFramebuffer( gl.FRAMEBUFFER, path.tempFb.framebuffer );
        glCat.clear( ...path.clear );

        glCat.attribute( 'p', vboQuad, 2 );
        glCat.uniform1i( 'isVert', false );
        glCat.uniform1f( 'gaussVar', gaussVar );
        glCat.uniformTexture( 'sampler0', params.input, 0 );
        gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
        
        gl.bindFramebuffer( gl.FRAMEBUFFER, params.framebuffer );

        glCat.attribute( 'p', vboQuad, 2 );
        glCat.uniform1i( 'isVert', true );
        glCat.uniform1f( 'gaussVar', gaussVar );
        glCat.uniformTexture( 'sampler0', path.tempFb.texture, 0 );
        glCat.uniformTexture( 'samplerDry', params.input, 1 );
        gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
      }
    }
  },
  
  bloomFinalize: {
    width: width,
    height: height,
    vert: glslify( './shader/quad.vert' ),
    frag: glslify( './shader/bloom-finalize.frag' ),
    blend: [ gl.ONE, gl.ZERO ],
    clear: [ 0.0, 0.0, 0.0, 0.0 ],
    framebuffer: true,
    float: true,
    func: ( path, params ) => {
      glCat.attribute( 'p', vboQuad, 2 );
      glCat.uniformTexture( 'samplerDry', params.dry, 0 );
      glCat.uniformTexture( 'samplerWet', params.wet, 1 );
      gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
    }
  },
  
  おたくはすぐポストエフェクトを挿す: {
    width: width,
    height: height,
    vert: glslify( './shader/quad.vert' ),
    frag: glslify( './shader/post.frag' ),
    blend: [ gl.ONE, gl.ZERO ],
    clear: [ 0.0, 0.0, 0.0, 0.0 ],
    framebuffer: true,
    func: ( path, params ) => {
      glCat.attribute( 'p', vboQuad, 2 );
      glCat.uniformTexture( 'sampler0', params.input, 0 );
      gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
    }
  },
} );

// ------

let updateUI = () => {
  let now = new Date();
  let deadline = new Date( 2018, 1, 2, 0, 0 );

  divCountdown.innerText = "Deadline: " + Math.floor( ( deadline - now ) / 1000 );
};

// ------

let textChars = [
  [ 15, 0.7, 0.4 ],
  [ 17, 0.7, 0.3 ],
  [ 14, 1.0, 0.7 ],
  [  2, 0.7, 0.6 ],
  [  4, 0.75, 0.4 ],
  [  3, 1.3, 0.8 ],
  [ 20, 1.1, 0.55 ],
  [ 17, 0.9, 0.2 ],
  [  4, 1.0, 0.6 ],
];
textChars.map( ( a ) => {
  a[ 0 ] = new VertPhaser( letters[ a[ 0 ] ] );
} );

let updateText = () => {
  let phase = auto( "phase" );

  let pos = [];
  let nor = [];
  textChars.map( ( a, i ) => {
    let vert = a[ 0 ].do(
      lerp( a[ 1 ], a[ 2 ], phase ),
      phase
    );
    translateArray2D(
      vert,
      ( ( i % 3 ) - 1 ) * 5.5 - 2.5,
      ( 1 - Math.floor( i / 3 ) ) * 5.5 - 2.5
    );

    let tri = new Triangulation( vert );
    tri.do( 100 );
    pos.push( ...tri2Dto3D( tri.tri, 0.0 ) );

    for ( let i = 0; i < tri.tri.length / 2.0; i ++ ) {
      nor.push( 0, 0, 1 );
    }

    let ext = extrudePath( vert, 0.0, -5.0 );
    pos.push( ...ext.pos );
    nor.push( ...ext.nor );
  } );

  glCat.setVertexbuffer( vboTextPos, pos, gl.DYNAMIC_DRAW );
  glCat.setVertexbuffer( vboTextNor, nor, gl.DYNAMIC_DRAW );
};

// ------

glCatPath.render( "gaussTable" );

let update = () => {
  if ( !tweak.checkbox( "play", { value: true } ) ) {
    setTimeout( update, 100 );
    return;
  }

  automaton.update();

  if ( automaton.frame === 0 ) {
    xorshift( 179067891367 );
  }

  updateUI();
  updateMatrices();
  
  updateText();

  textureRandomUpdate( textureRandom );

  // ------

  glCatPath.begin();

  glCatPath.render( "🐬" );
  glCatPath.render( "影" );

  // ↓ too slow and not beautiful so omitted
  // glCatPath.render( "grid", {
  //   target: glCatPath.fb( "影" ),
  //   isShadow: true,
  //   width: shadowSize,
  //   height: shadowSize
  // } );}

  glCatPath.render( "particlesComputeReturn" );
  glCatPath.render( "particlesCompute" );

  glCatPath.render( "particlesRender", {
    target: glCatPath.fb( "影" ),
    isShadow: true,
    width: shadowSize,
    height: shadowSize
  } );

  glCatPath.render( "text", {
    target: glCatPath.fb( "影" ),
    isShadow: true,
    width: shadowSize,
    height: shadowSize
  } );

  glCatPath.render( "grid", {
    target: glCatPath.fb( "🐬" ),
    isShadow: false
  } );

  glCatPath.render( "particlesRender", {
    target: glCatPath.fb( "🐬" )
  } );

  glCatPath.render( "text", {
    target: glCatPath.fb( "🐬" ),
    isShadow: false
  } );

  glCatPath.render( "fxaa", {
    input: glCatPath.fb( "🐬" ).textures[ 0 ]
  } );

  glCatPath.render( "gauss", {
    target: framebufferPreDof,
    input: glCatPath.fb( "fxaa" ).texture,
    width: width,
    height: height,
    var: 5.0
  } );

  glCatPath.render( "dof", {
    dry: glCatPath.fb( "fxaa" ).texture,
    predof: framebufferPreDof.texture,
    depth: glCatPath.fb( "🐬" ).textures[ 1 ]
  } );

  glCatPath.render( "Gowrock - bloom", {
    input: framebufferPreDof.texture,
  } );
  glCatPath.render( "bloomFinalize", {
    dry: glCatPath.fb( "dof" ).texture,
    wet: glCatPath.fb( "Gowrock - bloom" ).texture
  } );

  glCatPath.render( "おたくはすぐポストエフェクトを挿す", {
    target: GLCatPath.nullFb,
    input: glCatPath.fb( "bloomFinalize" ).texture
  } );

  glCatPath.end();

  init = false;
  totalFrame ++;

  // ------

  if ( tweak.checkbox( "save", { value: false } ) ) {
    saveFrame();
  }

  requestAnimationFrame( update );
}

update();

// ------

window.addEventListener( "keydown", ( _e ) => {
  if ( _e.which === 27 ) {
    tweak.checkbox( "play", { set: false } );
  }
} );
