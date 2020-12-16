import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import LibraryImage from '../../asserts/img/library.jpg'

export class Contact extends Component {
    render() {
        return(
            <div>
                <div style={{marginBottom: '20px'}}>
                    <div className="container" style={{margin: '50px auto',marginTop: '50px'}}>
                        <div className="row" style={{margin: '0px'}}>
                            <form className="border rounded col-lg-8">
                                <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>CONTACT</b></h2>
                                <div className="row col-11" style={{margin: '15px auto',padding: '0px'}}>
                                    <div className="form-group d-inline-block col-12 col-lg-6" style={{margin: '15px 0px',marginBottom: '0px'}}>
                                        <input className="form-control" type="text" placeholder="*First Name" required/>
                                    </div>
                                    <div className="form-group d-inline-block col-12 col-lg-6" style={{margin: '15px 0px',marginBottom: '0px'}}>
                                        <input className="form-control" type="text" placeholder="*Last Name" required/>
                                    </div>
                                </div>

                                <div className="form-group d-block d-xl-flex col-11" style={{margin: '15px auto'}}>
                                    <input className="form-control" type="text" placeholder="*Library Card Number" required minLength="7"/>
                                </div>

                                <div className="form-group d-block col-11" style={{margin: '15px auto'}}>
                                    <input className="form-control" type="text" placeholder="Email Address" required/>
                                </div>

                                <div className="form-group d-block col-11" style={{margin: '15px auto'}}>
                                    <input className="form-control" type="text" placeholder="Phone"/>
                                </div>

                                <div className="form-group d-block col-11" style={{margin: '15px auto'}}>
                                    <input className="form-control" type="text" placeholder="*Title" required/>
                                </div>

                                <div className="form-group d-block col-11" style={{margin: '15px auto'}}>
                                    <textarea className="form-control" placeholder="*Message" required style={{height: '200px'}}/>
                                </div>

                                <button className="btn btn-primary border-0 rounded-pill mb-4" type="submit" style={{backgroundColor: '#F15922',height:'40px',width: '150px',margin: '0px auto'}}>
                                    <b>Submit</b>
                                </button>
                            </form>

                            <aside className="d-none d-lg-block col-lg-4 shadow rounded" style={{margin: '0px auto',backgroundColor: '#000080',marginLeft: '0px'}}>
                                <form>
                                    <h3 style={{marginTop: '80px',marginBottom: '30px',color: '#fff',marginLeft: '10px'}}><b>HOW DO I?</b></h3>
                                </form>
                                <div className="form-group">
                                    <ul className="list-group">
                                        <li className="list-group-item" style={{backgroundColor: 'rgba(255,255,255,0)',padding: '0px'}}>
                                            <div className="border rounded border-white row col-11" style={{margin: '20px auto'}}>
                                                <i className="fa fa-id-card-o d-lg-flex d-xl-flex align-items-lg-center align-items-xl-center" style={{marginRight: '10px',color: '#fff',fontSize: '20px'}}></i>
                                                <Link style={{color: '#fff',fontSize: '20px'}}>Get A Card</Link>
                                            </div>

                                            <div className="border rounded border-white row col-11" style={{margin: '20px auto'}}>
                                                <i className="fa fa-user-circle-o d-lg-flex d-xl-flex align-items-lg-center align-items-xl-center" style={{marginRight: '10px',color: '#fff',fontSize: '20px'}}></i>
                                                <Link style={{color: '#fff',fontSize: '20px'}}>Manage My Account</Link>
                                            </div>

                                            <div className="border rounded border-white row col-11" style={{margin: '20px auto'}}>
                                                <i className="fa fa-print d-lg-flex d-xl-flex align-items-lg-center align-items-xl-center" style={{marginRight: '10px',color: '#fff',fontSize: '20px'}}></i>
                                                <Link style={{color: '#fff',fontSize: '20px'}}>Print From Anywhere</Link>
                                            </div>

                                            <div className="border rounded border-white row col-11" style={{margin: '20px auto'}}>
                                                <i className="fa fa-question-circle-o d-lg-flex d-xl-flex align-items-lg-center align-items-xl-center" style={{marginRight: '10px',color: '#fff',fontSize: '20px'}}></i>
                                                <Link style={{color: '#fff',fontSize: '20px'}}>Get Help</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>

                <div style={{marginTop: '20px'}}>
                    <div className="container" style={{margin: '50px auto'}}>
                        <form className="border rounded col-lg-8">
                            <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>HOURS &amp; LOCATION</b></h2>
                            <div className="row col-11" style={{margin: '15px auto'}}>
                                <img src={LibraryImage} className="col-8 col-lg-5" style={{margin: '15px auto',marginTop: '15px',height: '350px'}}/>
                                <div className="col-12 col-lg-7" style={{margin: '30px auto'}}>
                                    <div className="form-group col-12">
                                        <h3><b>Hours</b></h3>
                                        <p>Monday - Friday: 7a.m - 5p.m<br/>Saturday: 7a.m - 11a.m<br/>Sunday: closed</p>
                                    </div>

                                    <div className="form-group col-12">
                                        <h3><b>Phone</b></h3>
                                        <p>028 6288 4499</p>
                                    </div>

                                    <div className="form-group col-12">
                                        <h3><b>Address</b></h3>
                                        <p style={{margin: '0px'}}>227 Nguyen Van Cu Street, Ward 4, District 5, HCMC</p>
                                        <Link>Get Direction</Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}