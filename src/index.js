import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//  import App from './App';
import reportWebVitals from './reportWebVitals';


//projects
 import Movie from './Movie Project/Movie';
//import NS from './PictureOfNS/NS';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Movie/>
    {/* <NS/> */}
  </React.StrictMode>
);

reportWebVitals();
