import React, {Component} from 'react'
import BookImage from '../../asserts/js/images'

export class ReturnBook extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div className="container row border" style={{margin: '50px auto'}}>
                    <form className="col-md-8 mb-4">
                        <label className="col-sm-12 mt-4" style={{color: '#1429D7', fontSize: '30px'}}>
                            <b>RETURN A BOOK</b>
                        </label>
                        <div className="form row" style={{padding: '15px'}}>
                            <div className="col-md-6 mb-3">
                                <input type="text" className="form-control" id="FirstName" placeholder="*First name" required></input>
                            </div>

                            <div className="col-md-6 mb-3">
                                <input type="text" className="form-control" id="LastName" placeholder="*Last name" required></input>
                            </div>

                            <div className="col-sm-12 mb-3">
                                <input type="text" className="form-control" placeholder="*Library Card Number" required></input>
                            </div>

                            <div className="col-sm-12 mb-3">
                                <input type="text" className="form-control" placeholder="*Book's name (Auto-fill)" required></input>
                            </div>

                            <div className="col-sm-12 mb-3">
                                <input type="text" className="form-control" placeholder="*SKU (Auto-fill)" required></input>
                            </div>

                            <div className="col-lg-3 mb-3 text-left mt-2">
                                <label style={{paddingLeft: '5px', fontWeight: 'bold'}}>Expire in:</label>
                            </div>

                            <div className="col-lg-9 mb-3">
                                <input type="text" class="form-control" placeholder="*Date (Auto-fill)" required/>
                            </div>

                            <div className="col-lg-3 mb-3 text-left mt-2">
                                <label style={{paddingLeft: '5px', fontWeight: 'bold'}}>Date-to-return:</label>
                            </div>

                            <div className="col-lg-3 mb-3">
                                <select className="form-control" name="day" id="day" onchange="setDays(month,this,year)">
                                    <option value="" disabled selected hidden>Day</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                            </div>

                            <div className="col-lg-3 mb-3">
                                <select className="form-control" name="month" id="month" onchange="setDays(this,day,year)">
                                    <option value="" disabled selected hidden>Month</option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>

                            <div className="col-lg-3 mb-3">
                                <select className="form-control" name="year" id="year" onchange="setDays(month,day,this)">
                                    <option value="" disabled selected hidden>Year</option>
                                    <option value="1944">1944</option>
                                    <option value="1945">1945</option>
                                    <option value="1946">1946</option>
                                    <option value="1947">1947</option>
                                    <option value="1948">1948</option>
                                    <option value="1949">1949</option>
                                    <option value="1950">1950</option>
                                    <option value="1951">1951</option>
                                    <option value="1952">1952</option>
                                    <option value="1953">1953</option>
                                    <option value="1954">1954</option>
                                    <option value="1955">1955</option>
                                    <option value="1956">1956</option>
                                    <option value="1957">1957</option>
                                    <option value="1958">1958</option>
                                    <option value="1959">1959</option>
                                    <option value="1960">1960</option>
                                    <option value="1961">1961</option>
                                    <option value="1962">1962</option>
                                    <option value="1963">1963</option>
                                    <option value="1964">1964</option>
                                    <option value="1965">1965</option>
                                    <option value="1966">1966</option>
                                    <option value="1967">1967</option>
                                    <option value="1968">1968</option>
                                    <option value="1969">1969</option>
                                    <option value="1970">1970</option>
                                    <option value="1971">1971</option>
                                    <option value="1972">1972</option>
                                    <option value="1973">1973</option>
                                    <option value="1974">1974</option>
                                    <option value="1975">1975</option>
                                    <option value="1976">1976</option>
                                    <option value="1977">1977</option>
                                    <option value="1978">1978</option>
                                    <option value="1979">1979</option>
                                    <option value="1980">1980</option>
                                    <option value="1981">1981</option>
                                    <option value="1982">1982</option>
                                    <option value="1983">1983</option>
                                    <option value="1984">1984</option>
                                    <option value="1985">1985</option>
                                    <option value="1986">1986</option>
                                    <option value="1987">1987</option>
                                    <option value="1988">1988</option>
                                    <option value="1989">1989</option>
                                    <option value="1990">1990</option>
                                </select>
                            </div>

                            
                        </div>

                        <button className="btn btn-primary border-0 rounded-pill mb-4" type="submit" style={{backgroundColor: '#F15922',height:'40px',width: '150px',margin: '0px auto'}}>
                            <b>Submit</b>
                        </button>

                        
                    </form>
                    <div class="d-none d-md-block col-sm-4 mb-4 mt-4" style={{padding: '30px 10px'}}>
                        <img src={BookImage[parseInt(this.props.serial)]} style={{width: '230px'}} alt="Book's Image"/>
                    </div>
                </div>
            </div>
            
        )
    }
}