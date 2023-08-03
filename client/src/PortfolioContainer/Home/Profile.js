import React from 'react'
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='icons'>
                        <a href='https://github.com/Mitchathy'>
                            <i className='fa fa-github'> </i>
                        </a>
                        <a href='https://www.linkedin.com/in/mitchell-walker-b66698104/'>
                            <i className='fa fa-linkedin'>
                            </i>
                        </a>
                    </div>
                    <div className="profile-details-name">
                        <span className='primary-text'>
                            Hello, I'm <span className='highlighted-text'>Mitchell</span>
                        </span>
                    </div>
                    <div className='DwnResume'>
                        <a href='Mitchell-Walker-resume2023.pdf' download='Mitchell Walker resume.pdf'>
                            <button className='Resume'>
                                 Download Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
    
}