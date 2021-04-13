import React, {Component} from 'react'
class Member extends Component{
    render()
    {
        return (
            <div className="member">
            <h1>{this.props.Member.text}</h1>
            <h2>{ this.props.Member.info.name }</h2>
            <p>Tuổi: { this.props.Member.info.GirlFriend }</p>
            </div>
        )
    }
}

export default Member