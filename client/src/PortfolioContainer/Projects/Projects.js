import React from 'react'
import './Projects.css'

export default function Projects() {
    return (
       <div className='ProjectsContainer'>
            <div className='Title'>
                <h3>Projects</h3>
            </div>
            <div className='Projects'>
                <ul>
                    <li>Nasa photo of the day</li>
                        <a href='https://github.com/Mitchathy/nasa-photo-of-the-day'>github</a>
                            <a href='https://nasa-photo-of-the-3mmm4jozo-eagleye1144.vercel.app/'>App</a>
                    <li>Water my Plants</li>
                        <a href='Water_github'>github</a>
                            <a href='Water_live'>App</a>
                    <li>Secret Family cookbook</li>
                        <a href='Cookbook_github'>github</a>
                            <a href='Cookbook_live'>App</a>
                </ul>

            </div>
       </div> 
    )
}