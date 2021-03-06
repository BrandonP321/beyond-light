import React from 'react'
import BorderButton from '../BorderButton'
import './index.css'

const FlexItem = () => null;
FlexItem.displayName = 'FlexItem'

export default function FlexSection(props) {
    const renderFlexItems = () => {
        // look for flex items in children of component
        const flexItems = findByType(props.children, FlexItem);

        // if no flex items, return null
        if (flexItems.length === 0) return null

        // return the children of the flex item sub component
        return (
            flexItems.map(item => {
                console.log(item)
                return (
                    <div className={`flex-item ${item.props.className || ''}`}>
                        {item.props.children}
                    </div>
                )
            })
        )
    }

    return (
        <section className={`flex-section ${props.className || ''}`}
            style={{ height: props.height || '100vh', background: `url(${props.backgroundImg})` }}>
            <div className='content-wrapper'>
                <div className='section-content' style={{ transform: `translateY(${props.contentTranslation})` }}>
                    <p className='section-small-heading'>{props.smallHeading}</p>
                    <div className='section-heading-divider'></div>
                    <h2>{props.heading}</h2>
                    <p className='section-body'>{props.sectionBody}</p>
                    <BorderButton
                        color='blue'
                        className='section-btn'>{props.btnText}</BorderButton>
                    <div className='section-flex-items'>
                        {renderFlexItems()}
                    </div>
                </div>
            </div>
        </section>
    )
}

FlexSection.FlexItem = FlexItem;

// function to find a sub component in the components children
const findByType = (children, component) => {
    let result = []

    const type = component.displayName

    React.Children.forEach(children, child => {
        const childType = child && child.type && child.type.displayName

        if (type === childType) {
            result.push(child)
        }
    })

    return result
}