import React from 'react'
// import web1 from '../images/web1.png'

const projectItem = (props) => {
    const side=(props.project.id%2===0)?true:false
    
    return (
        <div className='project--item'>
            <div className={side?'projectItem--img imgEven':'projectItem--img'}>
                <div className="projectImgContainer">
                <img src={props.project.imgUrl} alt="" />
                <div className='projectImg--overlay'></div>
                </div>
            </div>
            <div className={side?'projectItem--contents contentsEven':'projectItem--contents'}>
                <p className="pro--over">{props.project.type}</p>
                <h3 className="pro--title">{props.project.title}</h3>
                <div className="pro--des">
                    <p>{props.project.des}</p>
                </div>
                <ul className={side?"pro--tech techEven":"pro--tech"} >
                    {props.project.tech.map(item=>{
                        return <li>{item}</li>
                    })}
                   
                </ul>
            </div>
        </div>
    )
}

export default projectItem