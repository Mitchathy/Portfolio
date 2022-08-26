import React from 'react'
import './Projects.css'
import explanationData from './ExplanationData'
import { useState } from 'react'
import ProjectExplanation from './ProjectExplanation'
export default function Projects() {
    console.log(explanationData[0])


    return (
       <div className='ProjectsContainer'>
            <div className='Title'>
                <h3>Projects</h3>
            </div>
            <div className='Projects'>
                    <div className='project1'>Nasa photo of the day
                        <a href='https://github.com/Mitchathy/nasa-photo-of-the-day'>
                            <i className='fa fa-github'> </i>
                                </a>
                            <a href='https://nasa-photo-of-the-3mmm4jozo-eagleye1144.vercel.app/'>App</a>
                                <ProjectExplanation project ={explanationData[0]}/>
                                 </div>
                    <div className='project2'>Water my Plants
                        <a href='https://github.com/Bulid-Week-Water-My-Plants/back-end'>
                            <i className='fa fa-github'> </i>
                                </a>
                                <ProjectExplanation project ={explanationData[1]}/>
                                 </div>
                    <div className='project3'>Secret Family recipes
                        <a href='https://github.com/secretFamiltRecipiesCookbook/frontEnd'>
                            <i className='fa fa-github'> </i>
                                </a>
                                    <a href='https://secret-recipes-gold.vercel.app/'>App</a>
                                    <ProjectExplanation project ={explanationData[2]}/>
                                        </div>
            </div>
       </div> 
    )
}