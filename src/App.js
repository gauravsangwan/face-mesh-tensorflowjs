import React, { useRef, useEffect }  from "react";
//import logo from './logo.svg';
import './App.css';

// Install dependencies-done
// import dependencies - done
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from 'react-webcam';


// define refrences to those-Done
// detect function
// drawing utilities
// load triangulation
// setup triangle path
// setup point drawing
// add drawMesh to detect  function

function App() {
  // setup webcam and canvas
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // load facemesh-Done
  const runFacemesh = async() =>{
    const net = await facemesh.load({
      inputResolution:{width:640,height:480},scale:0.8
    })
  }



  return (
    <div className="App">
      <h1 >Face-Mesh tensorflowJS | Gaurav Sangwan</h1>
      <header classname="App-header">
      <Webcam 
        ref={webcamRef} 
        style = {{
                  position: "absolute",
                  marginTop: "50px",
                  marginLeft:"auto",
                  marginRight:"auto",
                  left:0,
                  right:0,
                  textAlign:"center",
                  zIndex:9,
                  width:640,
                  height:480
                }} />
      <canvas 
        ref={canvasRef} 
        style = {{
                  position: "absolute",
                  marginTop: "50px",
                  marginLeft:"auto",
                  marginRight:"auto",
                  left:0,
                  right:0,
                  textAlign:"center",
                  zIndex:9,
                  width:640,
                  height:480
                }} />
      </header>
    </div>
  );
}

export default App;
