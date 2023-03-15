import React from 'react'

export class FirstComponent extends React.Component {
    state = { job: 'Software Engineer' }

    componentDidMount() {
        this.setState({ job: 'Senior Software Engineer' })
    }

    render() {
        return (
            <div>
                <h2>
                    Hello! {this.props.name} is a {this.state.job}.
                </h2>
            </div>
        )
    }
}
