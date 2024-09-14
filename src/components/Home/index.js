import './index.css'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import Header from '../Header';

const Home=()=>   (
  <>
    <div className="App">
      <Header/>
    
    <section className="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Hemalatha Nunavath</h1>
        <h3>And I'm a <span className="text"></span></h3>
        <p>I'm a Full-Stack Developer. I have a solid foundation in both front-end and back-end technologies
          <br />experience in technologies like HTML, CSS, JavaScript, React, Node.js, etc.
        </p>

        <div>
          <FaFacebookF className="home-sci" />
          <FaInstagram className="home-sci" />
          <FaWhatsapp className="home-sci" />
          <FaGithub className="home-sci" />
        </div>
        <a href="#" className="btn-box">More About Me</a>
      </div>
    </section>
  </div>
  </>
)
export default Home