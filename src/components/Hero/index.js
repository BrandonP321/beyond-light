import React from 'react'
import BorderButton from '../BorderButton'
import './index.css'

export default function Hero() {
    return (
        <div className='hero'>
            <div className='content-wrapper'>
                <div className='hero-content'>
                    <h1>Beyond Light</h1>
                    <div className='btns-flex'>
                        <BorderButton
                            color='gray'
                            className='trailer-btn'><strong>TRAILER</strong></BorderButton>
                        <BorderButton
                            color='blue'
                            className='buy-now-btn'><strong>BUY NOW</strong></BorderButton>
                    </div>
                    <p>AVAILABLE NOW</p>
                </div>
            </div>
        </div>
    )
}
