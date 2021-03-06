import React from 'react'
import BorderButton from '../BorderButton'
import './index.css'

export default function StasisSection() {
    return (
        <section className='stasis-section'>
            <div className='content-wrapper'>
                <div className='content'>
                    <p className='small-heading'>STASIS</p>
                    <div className='divider'></div>
                    <h2><strong>WIELD STASIS</strong></h2>
                    <p className='body'>Guardians have always been warriors of the Light. In Beyond Light, for the first time, Guardians harness the power of Darkness with a new elemental power: Stasis.</p>
                    <BorderButton
                        color='blue'
                        className='stasis-btn'>EXPLORE STASIS</BorderButton>
                    <div className='sub-flex'>
                        <div>
                            <img src='https://i.imgur.com/zbD4BXB.png' alt='subclass icon'/>
                            <h3><strong>SUBCLASS & SUPERS</strong></h3>
                            <p>Each class uses Stasis in a different way, with an ever-growing list of amazing abilities and devastating Supers, all powered by Darkness.</p>
                        </div>
                        <div>
                            <img src='https://i.imgur.com/vSoHEvP.png' alt='subclass icon'/>
                            <h3><strong>ASPECTS & FRAGMENTS</strong></h3>
                            <p>Customize your Guardian with earnable Stasis perks that let you play the way you want.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
