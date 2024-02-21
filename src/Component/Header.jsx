
import Footer from './Footer';
import "./header.css"

function  Header  () {
  return (
    <div className='header'> 
        <h1 id="topic"> This is Header</h1>
        <h1 id="other">This is Amazing </h1>
        <Footer/>
    </div>
  )

}







// function Footer(){
//     return (
//         <h1>Footer</h1>
//     )
// }

//export default Footer;// only one function at one tion using dafault keyword

export default Header;
//export {Footer};

//export {Header}; //donot change name using object type in import function

//export {Header,Footer} ;  // multiple function will be exported like that