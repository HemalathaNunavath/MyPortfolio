import './index.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import Header from '../Header';

const Projects = () => (
  <>
  <Header/>
<div className = "bg-container">
<h1 className = "heading">Latest <span className = "text">Projects</span></h1>
  <div className="wrapper">
    <div className="image">
      <img 
        src="https://res.cloudinary.com/dy2iezllj/image/upload/v1726168660/WhatsApp_Image_2024-09-13_at_12.46.05_AM_pebiqt.jpg" 
        alt="UI/UX Design Preview" 
      />
      <div className="content">
        <h1>UI/UX Design</h1>
        <p>
          UI/UX design focuses on creating user-friendly interfaces and seamless user experiences.
          UI (User Interface) design deals with the visual aspects like layout, typography, colors,
          and interactive elements, ensuring that the product looks appealing and is easy to navigate.
          UX (User Experience) design emphasizes usability, accessibility, and the overall journey a user takes,
          aiming to create a product that is both intuitive and enjoyable to use. Together, UI/UX design enhances 
          user satisfaction by balancing aesthetics and functionality.
        </p>
        <FaExternalLinkAlt className = "external-icon"/>
      </div>
    </div>
    <div className="image">
      <img 
      src="https://res.cloudinary.com/dy2iezllj/image/upload/v1726168680/WhatsApp_Image_2024-09-13_at_12.46.26_AM_lvifw2.jpg" 
        alt="UI/UX Design Preview" 
      />
      <div className="content">
        <h1>UI/UX Design</h1>
        <p>
          UI/UX design focuses on creating user-friendly interfaces and seamless user experiences.
          UI (User Interface) design deals with the visual aspects like layout, typography, colors,
          and interactive elements, ensuring that the product looks appealing and is easy to navigate.
          UX (User Experience) design emphasizes usability, accessibility, and the overall journey a user takes,
          aiming to create a product that is both intuitive and enjoyable to use. Together, UI/UX design enhances 
          user satisfaction by balancing aesthetics and functionality.
        </p>
        <FaExternalLinkAlt className = "external-icon"/>
      </div>
    </div>
    <div className="image">
      <img 
        src="https://res.cloudinary.com/dy2iezllj/image/upload/v1726146864/WhatsApp_Image_2024-09-12_at_6.44.06_PM_ftzwlw.jpg" 
        alt="UI/UX Design Preview" 
      />
      <div className="content">
        <h1>UI/UX Design</h1>
        <p>
          UI/UX design focuses on creating user-friendly interfaces and seamless user experiences.
          UI (User Interface) design deals with the visual aspects like layout, typography, colors,
          and interactive elements, ensuring that the product looks appealing and is easy to navigate.
          UX (User Experience) design emphasizes usability, accessibility, and the overall journey a user takes,
          aiming to create a product that is both intuitive and enjoyable to use.
        </p>
        <FaExternalLinkAlt className = "external-icon"/>
      </div>
    </div>
  
  </div>
  </div>
  </>
  
);

export default Projects
