import React, { Component } from 'react'
import './Styling.css'
import Child from './Child'
import style from './Styling.module.css'

export default class Styling extends Component {
    render() {
        return (
            <div>
                <p className='txt text-center'>Dang Khai Minh</p>
                <Child />
                <p className={style.txt}>Dang Khai Minh module</p>
            </div>
        )
    }
}
