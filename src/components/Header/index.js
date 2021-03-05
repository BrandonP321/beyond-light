import React from 'react'
import BorderButton from '../BorderButton'
import './index.css'

export default function Header() {
    return (
        <header>
            <div className='content-wrapper'>
                <div className='header-flex'>
                    <div className='header-logo-wrapper'>
                        <img src='/assets/media/beyond-light-heading.png' alt='Destiny 2 Beyond Light' />
                    </div>
                    <div className='header-nav'>
                        <a href='#' className='nav-link active'>GAME</a>
                        <a href='#' className='nav-link'>STASIS</a>
                        <a href='#' className='nav-link'>EUROPA</a>
                        <a href='#' className='nav-link'>STORY</a>
                        <a href='#' className='nav-link'>MEDIA</a>
                        <a href='#' className='nav-link'>
                            <BorderButton 
                                color='blue'
                                className='nav-link-btn'>BUY NOW</BorderButton>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
