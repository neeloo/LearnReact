
import './App.css';

//import Header,{Footer} from './Header'; //used of object and function
//import {Header,Footer} from '.Header'; //used multiple function

import Header from './Component/Header';
import Footer from './Component/Footer';


function App() {
  let name="WenMantra3"
  return (
    <div className="App">
     {/* //Adding componet   */}
     <Header/> 
     <h1>{name}</h1> 
     <Footer/>
     
    
    </div>
  );
}

export default App;
