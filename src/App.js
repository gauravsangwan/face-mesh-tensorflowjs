//import logo from './logo.svg';
import './App.css';

// Install dependencies-done
// import dependencies
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from 'react-webcam';

// setup webcam and canvas
// define refrences to those
// load facemesh
// detect function
// drawing utilities
// load triangulation
// setup triangle path
// setup point drawing
// add drawMesh to detect  function

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
