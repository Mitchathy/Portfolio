import React from 'react'
import './Projects.css'
import explanationData from './ExplanationData'
import ProjectExplanation from './ProjectExplanation'
export default function Projects() {
    console.log(explanationData[0])


    return (
       <div className='ProjectsContainer'>
            <div className='Title'>
                <h3>Projects</h3>
            </div>
            <div className='Projects'>
                    <div className='project1'>
                        <img src="rockets_PNG13294.png" alt='nasa rocket'></img>
                        Nasa photo of the day
                        <a href='https://github.com/Mitchathy/nasa-photo-of-the-day'>
                            <i className='fa fa-github'> </i>
                                </a>
                            <a href='https://nasa-photo-of-the-3mmm4jozo-eagleye1144.vercel.app/'>App</a>
                                <ProjectExplanation project ={explanationData[0]}/>
                                 </div>
                    <div className='project2'>
                    <img src="free-plant-icon-1573-thumb.png" alt='Plant'></img>
                    Water my Plants
                        <a href='https://github.com/Bulid-Week-Water-My-Plants/back-end'>
                            <i className='fa fa-github'> </i>
                                </a>
                                <ProjectExplanation project ={explanationData[1]}/>
                                 </div>
                    <div className='project3'>
                    <img src="25_book_recipes_recipe_kitchen_cook_cooking_food-512.webp" alt='cookbook'></img>
                    Secret Family recipes
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