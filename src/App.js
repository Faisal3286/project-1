import React from 'react';
import './App.css';
import 'tachyons';
import Hello from './Hello';
function App() {
  return (
    <div className='tc bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5 '>
      <h1 className='tc'>I love React.</h1>
      <hr/>
      <div>
      <Hello/>
      </div>
    </div>
  );
}

export default App;
