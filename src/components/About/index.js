import './index.css'
import Header from '../Header'

const About = () => (
    <>
    <Header/>
    <div className = "about">
        <div className ="about-img-1">
        <img src = "https://res.cloudinary.com/dy2iezllj/image/upload/v1725641276/hyma_nqqjy1.png" 
        className = "image-2" alt="image"/>
        </div>
        <div className = "about-text">
        <h2>About <span>Me</span></h2>
        <h4>Full Stack Developer!</h4>
        <p>As a full-stack developer, I have had the opportunity to work on both the front-end and back-end of web applications, 
            which has given me a well-rounded understanding of the entire development process.
            I really enjoy the challenge of bridging the gap between user experience and server-side logic.
            On the front-end, I’m proficient in HTML, CSS, and JavaScript. I have hands-on experience with modern frameworks like React, 
            which I use to build responsive and dynamic user interfaces. 
            I believe in creating user-friendly designs that are both functional and aesthetically pleasing, 
            always considering responsiveness and performance. 
            For the back-end, I have worked with server-side technologies such as Node.js and Python. 
            I’m comfortable designing APIs and working with databases like MySQL 
            I approach full-stack development with a strong focus on collaboration and communication, 
            ensuring that I work closely with both design and development teams. 
            I enjoy learning new technologies and staying updated with industry trends, which allows me to adapt quickly to new challenges.
             I’m confident that my diverse skill set would be an asset to your team, 
            and I’m excited about the opportunity to contribute....
            </p>
            <a href="#" className="btn-box">More About Me</a>
            </div>
    </div>
    </>
)
export default About 