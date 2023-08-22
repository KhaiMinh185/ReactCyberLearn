import React, { Component } from 'react'

export default class StateDemo extends Component {

    userLogin = {
        name: 'Dang Khai Minh',
        age: 21
    }

    state = {
        status: false
    }

    login = () => {
        let newState = {
            status : true
        }
        this.setState(newState,()=>{
            console.log(this.state)
        })

    }

    renderUserLogin = () => {
        if (this.state.status) {
            return <div className='text-center'>{this.userLogin.name}</div>
        }
        return <button onClick={() => { this.login() }}>Login</button>
    }

    render() {
        return (
            <this.renderUserLogin />
        )
    }
}
