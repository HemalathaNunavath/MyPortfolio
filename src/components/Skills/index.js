import './index.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";

const Skills = () => (
  <div className="bg-container">
    <h4 className = "heading">My <span className = "text" >Skills</span></h4>
    <div className = "app-container">
    <div className = "container-1">
      <h4 className = "side-heading">Techincal Skills</h4>
      <div className = "percentage-container">
        <FaHtml5 className = "icons-html"/>
        <h2 className = "icons-name">HTML</h2>
        <div className="progress-container">
        <div className="progress-bar">
        <div className="progress bar-1" ></div>
      </div>
     </div>
      </div>
      <div className = "percentage-container">
        <FaCss3 className = "icons-css"/>
        <h2 className = "icons-name">CSS</h2>
        <div className="progress-container">
        <div className="progress-bar">
        <div className="progress bar-2" ></div>
      </div>
     </div>
      </div>
      <div className = "percentage-container">
        < IoLogoJavascript className = "icons-javascript"/>
        <h2 className = "icons-name">JavaScript</h2>
        <div className="progress-container">
        <div className="progress-bar">
        <div className="progress bar-3" ></div>
      </div>
     </div>
      </div>
      <div className = "percentage-container">
        < RiReactjsFill className = "icons-reactjs"/>
        <h2 className = "icons-name">ReactJs</h2>
        <div className="progress-container">
        <div className="progress-bar">
        <div className="progress bar-4" ></div>
      </div>
     </div>
        
      </div>
      <div className = "percentage-container">
        < DiNodejs className = "icons-nodejs"/>
        <h2 className = "icons-name">NodeJS</h2>
        <div className="progress-container">
        <div className="progress-bar">
        <div className="progress bar-5" ></div>
      </div>
     </div>
      </div>
      <div className = "percentage-container">
        < FaPython  className = "icons-python"/>
        <h2 className = "icons-name">Python</h2>
        <div className="progress-container">
        <div className="progress-bar">
        <div className="progress bar-5" ></div>
      </div>
     </div>
        
      </div>
    </div>
  
    <div className = "piechart-container">
    <h4 className = "side-heading-2">Professional Skills</h4>
    <div class="pie-chart">
        <div class="circular-progress">
            <span class="progress-value">70%</span>
        </div>
    </div>
    <p className='para'>Communication</p>
    <div class="pie-chart">
        <div class="circular-progress">
            <span class="progress-value chart-1">80%</span>
        </div>
    </div>
    <p className='para'>TeamWork</p>
    <div class="pie-chart">
        <div class="circular-progress">
            <span class="progress-value">90%</span>
        </div>
    </div>
    <p className='para'>Problem Solving</p>
    <div class="pie-chart">
        <div class="circular-progress">
            <span class="progress-value">70%</span>
        </div>
    </div>
    <p className='para'>Time Management</p>
    </div>
    </div>
    </div>
   

)
export default Skills;
