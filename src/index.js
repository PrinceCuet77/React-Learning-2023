import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'

const Greeting = () => {
    return <h4>Hello world</h4>
}

// 1. Which component I want to render.
// 2. Where I want to render
ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}
        <Greeting />
    </React.StrictMode>,
    document.getElementById('root')
)
