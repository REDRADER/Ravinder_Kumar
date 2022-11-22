import React from 'react'
import photo from '../images/photo.jpg'
const About = () => {
    return (
        <section className='about' id='about'>
            <h2 className='section--head'>About Me</h2>

            <div className='section--content'>
                <div className="section--text">
                <div>
                        <p className='section-para1'>hi! My name is Ravinder Kumar and i like to build things which goes on Web. Mostly i like build the thing but occasionally
                            i also do graphic designing. I started Web Development because of a teacher in 9 grade who came to take a guest lecture in
                            our school where she first showed us that how a file writing on notepad can be displayed on the browser that was my first time seeing Hello World on a webpage.
                        </p>
                        <p className='section-para2'>Fast forward to today, I have been building website and Mobile apps from one to another. Recently I also joined TCS and I trying out the MNC life .

                        </p>
                        <p className='section-para3'>
                            Few of the technologies i have worked with:
                        </p>
                    </div>
                    <ul class="skills">
                        <li>JAVA</li>
                        <li>JavaScript</li>
                        <li>Html</li>
                        <li>Android</li>
                        <li>React</li>
                        <li>SQL</li>
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