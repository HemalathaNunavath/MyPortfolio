import './index.css';
import { FaApple } from "react-icons/fa";
import { CiCrop } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import Header from '../Header';
const MyServices = () => {
    
    return (
        <div className="bg-container">
            <Header/>
            <div className="services">
                <div className="container">
                    <h1 className="sub-title">
                        My <span>Services</span>
                    </h1>
                    <div className="services-list">
                        <div>
                            <FaApple className="icons-clrs" />
                            <h2>UI/UX services</h2>
                            <p className = "para">To create a pie chart with different values like 80% and 70% using only HTML and CSS, we can use the conic-gradient CSS feature. This is a simple and effective method to generate pie charts without JavaScript.</p>
                            <a href="#"  className="btn-box">Learn more</a>
                        </div>
                        <div>
                            <CiCrop className="icons-clrs" />
                            <h2>UI/UX services</h2>
                            <p className = "para">To create a pie chart with different values like 80% and 70% using only HTML and CSS, we can use the conic-gradient CSS feature. This is a simple and effective method to generate pie charts without JavaScript.</p>
                            <a href="#" className="btn-box">Learn more</a>
                        </div>
                        <div>
                            <FaCode className="icons-clrs" />
                            <h2>UI/UX services</h2>
                            <p className = "para">To create a pie chart with different values like 80% and 70% using only HTML and CSS, we can use the conic-gradient CSS feature. This is a simple and effective method to generate pie charts without JavaScript.</p>
                            <a href="#" className="btn-box">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;
