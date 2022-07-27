import React from 'react'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
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
                            Hello, I'm <span className='highlighted-text'>Mitch</span>
                        </span>
                    </div>
                        <a href='Mitchell-Walker-resume(1).pdf' download='Mitchell Walker resume.pdf'>
                            <button>
                                 Download Resume
                            </button>
                        </a>
                </div>
            </div>

        </div>
    )
    
}