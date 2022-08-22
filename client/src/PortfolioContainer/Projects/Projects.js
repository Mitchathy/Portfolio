import React from 'react'
import './Projects.css'

export default function Projects() {
    return (
       <div className='ProjectsContainer'>
            <div className='Title'>
                <h3>Projects</h3>
            </div>
            <div className='Projects'>
                    <div className='project1'>Nasa photo of the day
                        <a href='https://github.com/Mitchathy/nasa-photo-of-the-day'>github</a>
                            <a href='https://nasa-photo-of-the-3mmm4jozo-eagleye1144.vercel.app/'>App</a>
                                </div>
                    <div className='project2'>Water my Plants
                        <a href='https://github.com/Bulid-Week-Water-My-Plants/back-end'>github</a>
                            </div>
                    <div className='project3'>Secret Family recipes
                        <a href='Cookbook_github'>github</a>
                            <a href='https://secret-recipes-gold.vercel.app/'>App</a>
                                </div>
            </div>
       </div> 
    )
}