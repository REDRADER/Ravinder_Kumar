import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {

    const projectData=[
        {
            id:1,
            imgUrl:"../publicImages/web1.png",
            type:"Web Project",
            title:"Laba",
            des:"A library website for ordering or renting books online User can see online books which are available in a local library and order and Pick then.",
            tech:["JAVA","JSP","MYSQL","HTML","BootStrap/CSS"],
        },
        {
            id:2,
            imgUrl:"../publicImages/web2.png",
            type:"Web Project",
            title:"Chatting Web App",
            des:"This project was similar to whatsapp where one can loginin into the app with their google account and chat in groups. I used Firebase Realtime database for the backend.",
            tech:["React","JavaScript","Firebase","HTML","BootStrap/CSS"],
        },
        {
            id:3,
            imgUrl:"../publicImages/web3.png",
            type:"Android Project",
            title:"College Application",
            des:"this was a College Management Android application for my final year graduation project. Which consisted feature like Taking Attendance, Live Notice board, College Gallery, Chatting System, Login System and more.",
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