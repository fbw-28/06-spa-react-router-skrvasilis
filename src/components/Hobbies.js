import React from 'react'
import pingpong from '../images/pingpong.jpg'
import hearth from '../images/hearth.jpg'


export default function Hobbies() {
    return (
        <div>
            <div className='hobbie-container'>
            <h1> Hobby #1: Table tennis</h1>
            <div className='images-container'>
        <img src={pingpong} alt='pingpong'/>
        <img src={pingpong} alt='pingpong'/>
        <img src={pingpong} alt='pingpong'/>
        <img src={pingpong} alt='pingpong'/>
        </div>
        
        </div>

        <div className='hobbie-container'>
            <h1> Hobby #2: Hearthstone</h1>
            <div className='images-container'>
        <img src={hearth} alt='hearth'/>
        <img src={hearth} alt='hearth'/>
        <img src={hearth} alt='hearth'/>
        <img src={hearth} alt='hearth'/>
        </div>
        
        </div>

        </div>
    )
}
