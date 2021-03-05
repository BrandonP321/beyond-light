import React from 'react'
import './index.css'

export default function BorderButton(props) {
    return (
        <button className={`border-button ${props.color} ${props.className || ''}`}>
            {props.children}
        </button>
    )
}
