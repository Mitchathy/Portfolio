import React from 'react'
import './Projects.css'
import explanationData from './ExplanationData'
import { useState } from 'react'

export default function Projects() {
    console.log(explanationData[0])
    const ShowExplanation = (explanationData) => {
        
        const [showText, setShowText] = useState(false)

   
    }

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
                                <button className='Nasa' onClick = {explanationData[0]}>Show Explanation</button>
                                 </div>
                    <div className='project2'>Water my Plants
                        <a href='https://github.com/Bulid-Week-Water-My-Plants/back-end'>
                            <i className='fa fa-github'> </i>
                                </a>
                                <button className='Water' onClick = {explanationData[1]}>Show Explanation</button>
                                 </div>
                    <div className='project3'>Secret Family recipes
                        <a href='https://github.com/secretFamiltRecipiesCookbook/frontEnd'>
                            <i className='fa fa-github'> </i>
                                </a>
                                    <a href='https://secret-recipes-gold.vercel.app/'>App</a>
                                    <button className='Recipe' onClick = {explanationData[2]}>Show Explanation</button>
                                        </div>
            </div>
       </div> 
    )
}