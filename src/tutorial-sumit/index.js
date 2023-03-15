import React from 'react'

export class FirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello Class Component, and Hello {this.props.name}</h2>
            </div>
        )
    }
}
