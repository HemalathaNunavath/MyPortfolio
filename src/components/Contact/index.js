import './index.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import Header from '../Header';

const App = () => (
  <>
  
 <div className = "contact">

  <div className ="app-container">
  <div className = "contact-text">
  <Header/>

    <h2 className = "h2">Contact <span className = "h2-span">Me</span></h2>
    <h4 className = "h4">Let's Work Together</h4>
    <p className= "p">I thrive in collaborative environments where we can combine creative ideas with technical expertise. 
    Whether you're a startup looking to build a new product or an established company wanting to enhance your digital presence,
    I’m excited to work with you.</p>
       <div>
        <div className = "contact-list"><IoMdSend className = "icons"/>
        <p className = "details">hemalathanunavath121@gmail.com</p></div>
        
       </div>
       <div>
       <FaFacebook className = "home-sci" />
       <FaTwitter className = "home-sci" />
       <FaInstagram className = "home-sci" />
       <FaLinkedin  className ="home-sci"/>
      </div>
      </div>
      <div className = "contact-form">
        <form action = "">
            <input type = "" placeholder="Enter your Name" required/>
            <input type = "" placeholder="Enter your Email" required/>
            <input type = "" placeholder = "Enter your Subject"/>
            <textarea name = "" cols ="40" rows = "10" placeholder = "Enter Your Message" required/>
            <button type = "submit" value = "submit" className = "send">Submit</button>
        </form> 
      </div>
    </div>
 </div>
 </>
 
 )


 export default App