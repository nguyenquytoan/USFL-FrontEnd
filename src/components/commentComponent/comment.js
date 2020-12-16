import React, {Component} from 'react'

export class UserComment extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container" style={{padding: '10px 60px', backgroundColor: 'white'}}>
                <div className="row mt-3 mb-4">
                    <div className="col-6 col-md-2" style={{padding: '0px', margin: '0px auto',borderTop: '2px solid #1429D7'}}>
                        <div>
                            <i className="fa fa-user-circle-o mt-4" style={{color: '#1429D7', fontSize: '60px'}}></i>
                        </div>
                        <p className="text-center mt-2" style={{color: '#1429D7'}}><b>{this.props.name}</b></p>
                    </div>

                    <div className="col-12 col-md-9 rounded" style={{border: '1px solid #1429D7'}}>
                        <div className="col-sm-12 row mt-3">
                            <label className="col-2 col-md-2 mt-1 text-right" style={{paddingLeft: '0px'}}><b>Rate:</b></label>
                            <div className="col-4 col-xl-2 mt-2 ml-4">
                                <i className="fa fa-star checked float-left" style={{color: '#1429D7'}}></i>
                                <i className="fa fa-star checked float-left" style={{color: '#1429D7'}}></i>
                                <i className="fa fa-star checked float-left" style={{color: '#1429D7'}}></i>
                                <i className="fa fa-star checked float-left" style={{color: '#1429D7'}}></i>
                                <i className="fa fa-star float-left" style={{color: '#1429D7'}}></i>
                            </div>
                            <div className="col-6 col-xl-3 mt-1 row">
                                (About {this.props.title})
                            </div>
                        </div>

                        <div className="col-sm-12 row mb-3">
                            <label className="col-2 col-md-2 mt-1 text-right" style={{paddingLeft: '0px'}}><b>Comment:</b></label>
                            <div className="col-9 mt-1 ml-4 text-left">
                                {this.props.commentText}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}