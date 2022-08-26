import React from "react";
import { useState } from "react";

export default function ProjectExplanation(props) {
    const {project} = props

    const [showText, setShowText] = useState(false)   

        const toggleText = () =>{

            setShowText(!showText)
        }

    return (
        <div className= "ProjectInfo">
            {showText && <div>{project.explanation}</div>}
            <button onClick={toggleText}>
                {!showText ? 'Show Explanation' : 'Hide Explanation'}
                </button>
        </div>
    )



}