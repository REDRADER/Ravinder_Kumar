import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {

    const projectData=[
        {
            id:1,
            imgUrl:"../publicImages/web4.jpg",
            type:"Web Project",
            title:"Laba",
            des:"E-Store.The library website provides the convenience of online ordering and renting of books. Users can easily view the available books in their local library and place orders for pick-up at their convenience. ",
            tech:["JAVA","SPRING Boot","React Js","MYSQL","HTML/CSS"],
        },
        {
            id:2,
            imgUrl:"../publicImages/web1.jpg",
            type:"Web Project",
            title:"Portfolio Website",
            des:"It serves as a digital resume that provides a comprehensive overview of the my career and accomplishments. ",
            tech:["React","JavaScript","Firebase","HTML","BootStrap/CSS"],
        },
        {
            id:3,
            imgUrl:"../publicImages/web2.jpg",
            type:"Web Project",
            title:"Chatting Web App",
            des:"The website is built using the React framework, which provides a fast and responsive user interface. The Firebase backend provides secure user authentication, real-time messaging, and data storage, ensuring that the website is reliable and scalable.",
            tech:["React","JavaScript","Firebase","HTML","BootStrap/CSS"],
        },
        {
            id:4,
            imgUrl:"../publicImages/web3.jpg",
            type:"Android Project",
            title:"College Application",
            des:"As part of my final year graduation project, I developed an Android application for College Management. The application included several features such as attendance tracking, a live notice board, a college gallery, a chatting system, a login system, and more. ",
            tech:["JAVA","Android Studio","XML","Firebase"],
        },
        
    ]


    return (
        <section className='project' id='project'>
            <h2 className='section--head'>Projects</h2>

            <div className='project--content'>
                {
                    projectData.map(project=>{
                        return <ProjectItem key={project.id} project={project} />
                    })
                }
                
               
            </div>
        </section>
    )
}

export default Projects