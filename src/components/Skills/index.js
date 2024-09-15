import './index.css';
import Header from '../Header';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";


const Skills = () => (
  <>
  <div className="bg-container">
    <Header/>
    <h4 className = "heading">My<span className ="text">Skills</span></h4>
    <div className ="card-container">
      <div className = "html-container">
      <FaHtml5 className = "icons-html"/>
      <h3 className ="html">HTML</h3>
      </div>
      <div className = "html-container">
      <FaCss3 className ="icons-css"/>
      <h3 className = "html">CSS</h3>
      </div>
      <div className = "html-container">
      <FaPython className = "icons-python"/>
      <h3 className='html'>Python</h3>
      </div>
      <div className = "html-container">
      <IoLogoJavascript className='icons-javascript'/>
      <h3 className='html'>JavaScript</h3>
      </div>
      <div className = "html-container">
      <DiNodejs className = "icons-nodejs"/>
      <h3 className='html'>Node JS</h3>
      </div>
      <div className = "html-container">
      <RiReactjsFill className = "icons-reactjs"/>
      <h3 className = "html">React js</h3>
      </div>
    </div>
    </div>
    </>  

)
export default Skills;
