import React from 'react'
import photo from '../images/photo.jpg'
const About = () => {
    return (
        <section className='about' id='about'>
            <h2 className='section--head'>About Me</h2>

            <div className='section--content'>
                <div className="section--text">
                <div>
                        <p className='section-para1'>Hi, I'm Ravinder Kumar, a web developer and graphic designer who loves bringing digital creations to life on the web. 
                        My journey into web development started back in 9th grade when a guest lecturer visited our school and showed us how to display text on a web page 
                        using a simple text editor. Seeing the "Hello World" message appear on the screen was a magical moment for me, and I knew I wanted to explore this 
                        exciting world of web development. Fast forward to today, I have been building websites and mobile
                         apps, one project after another, leveraging my skills in web development and graphic design to create digital experiences that engage and delight users.
                        </p>
                        <p className='section-para3'>
                            Few of the technologies i have worked with:
                        </p>
                    </div>
                    <ul class="skills">
                        <li>JAVA</li>
                        <li>Spring Boot</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Html</li>
                        
                        <li>Python</li>
                        <li>SQL/MySQL</li>
                        <li>Css/BootStrap</li>
                    </ul>
                </div>
                <div className="section--img">
                    <div className="container">
                    <img src={photo} alt="" />
                    <div class="img--over"></div>
                    </div>
                   
                    
                </div>
            </div>
        </section>
    )
}

export default About