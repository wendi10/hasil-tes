import React, { Component } from 'react'
class FetchingFailure extends Component {
    render() {
        const { err } = this.props
        console.log(err);

        return (
            <div>
                <div>{err}</div>
                <a className='btn btn-primary' href={window.location.href}>Refresh Page</a>
            </div>
        )
    }
} export default FetchingFailure