import React from 'react'
import DarknessIsHereSection from '../../components/DarknessIsHereSection'
import FlexSection from '../../components/FlexSection'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import StasisSection from '../../components/StasisSection'
import './index.css'

export default function BeyondLight() {
    return (
        <>
            <Header />
            <Hero />
            <DarknessIsHereSection />
            <FlexSection
                className='stasis-section'
                height='120vh'
                backgroundImg='https://i.imgur.com/yEYszDb.jpg'
                contentTranslation='65vh'
                smallHeading='STASIS'
                heading='WIELD STASIS'
                sectionBody='Guardians have always been warriors of the Light. In Beyond Light, for the first time, Guardians harness the power of Darkness with a new elemental power: Stasis.'
                btnText='EXPLORE STASIS'>
                <FlexSection.FlexItem className='stasis-flex-item'>
                    <img src='https://i.imgur.com/zbD4BXB.png' alt='subclass icon' />
                    <h3><strong>SUBCLASS & SUPERS</strong></h3>
                    <p>Each class uses Stasis in a different way, with an ever-growing list of amazing abilities and devastating Supers, all powered by Darkness.</p>
                </FlexSection.FlexItem>
                <FlexSection.FlexItem className='stasis-flex-item'>
                    <img src='https://i.imgur.com/vSoHEvP.png' alt='subclass icon' />
                    <h3><strong>ASPECTS & FRAGMENTS</strong></h3>
                    <p>Customize your Guardian with earnable Stasis perks that let you play the way you want.</p>
                </FlexSection.FlexItem>
            </FlexSection>
            <FlexSection
                className='europa-section'
                height='125vh'
                contentTranslation='60vh'
                backgroundImg='https://i.imgur.com/lJ1P6pv.jpg'
                smallHeading='EUROPA'
                heading='EUROPA AWAITS'
                sectionBody='Icy winds whip the tundra and snow flurries quickly morph into blizzards as the shadow of Jupiter looms overhead. Across this frozen wasteland, secrets and dangers wait to be uncovered.'
                btnText='EXPLORE EUROPA'>
                <FlexSection.FlexItem className='europa-flex-item'>
                    <img src='https://i.imgur.com/xWDpmMW.png' alt='subclass icon' />
                    <h3><strong>AN UNEASY ALLY</strong></h3>
                    <p>Complete Variks’ quests to uncover the mysteries of Eramis’ Fallen army and collect Legendary weapons.</p>
                </FlexSection.FlexItem>
                <FlexSection.FlexItem className='europa-flex-item'>
                    <img src='https://i.imgur.com/zQCdWXj.png' alt='subclass icon' />
                    <h3><strong>EXO CHALLENGES</strong></h3>
                    <p>Earn Powerful rewards by completing these weekly challenges that will test your skills.</p>
                </FlexSection.FlexItem>
                <FlexSection.FlexItem className='europa-flex-item'>
                    <img src='https://i.imgur.com/nijNkHl.png' alt='subclass icon' />
                    <h3><strong>EMPIRE HUNTS</strong></h3>
                    <p>Track down and defeat the elite lieutenants of Eramis in these challenging missions that offer Powerful and Pinnacle rewards.</p>
                </FlexSection.FlexItem>
            </FlexSection>
        </>
    )
}
