import React, {Component} from 'react'
import BookImage from '../../asserts/js/images'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

export class BookCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-6 col-md mt-4" style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <div className="card col-12" style={{backgroundColor: 'transparent',border: 'none'}}>
                    <div><img src={BookImage[parseInt(this.props.serial)]} style={{width:'100%',height: '250px'}}/></div>
                    <div className="mt-2"><Link to='/book-detail' style={this.props.fontColor}><b>{this.props.title}</b></Link></div>
                </div>
            </div>
        )
    }

}
