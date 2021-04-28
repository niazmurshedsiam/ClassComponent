import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                <h4>User Name {this.props.user.name}</h4>
                <h3>{this.props.user.username}</h3>
                <button onClick={()=>this.props.handleAddToCart(this.props.user)}>Add me</button>
            </div>
        )
    }
}
