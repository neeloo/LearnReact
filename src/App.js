
import './App.css';
import Header from './Header';

//import {Header,Footer} from '.Header'; //used multiple function

function App() {
  let name="WenMantra3"
  return (
    <div className="App">
     {/* //Adding componet   */}
     <Header/> 
     <h1>{name}</h1> 
     
    
    </div>
  );
}

export default App;
