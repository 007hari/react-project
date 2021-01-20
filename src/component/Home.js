import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import Headerli from './template/Headerli';
import Header from './template/Header';
import '../App.less'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            value: '',
            sendzip:'',
            FName:'',
            LName:'',
            Phone:'',
            redirect:null
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.setState({redirect:"/thankyou" });
        // this.props.history.push("/thankyou");
       
      }
   
    render(){
        if (this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        return (
            <React.Fragment>
                 <Header/>
                <div className="container">
                 <div className="row">
                        <div className="col-lg-12">
                            <div className="rounded-list wa">
                            <Headerli/>
                        </div>
                        </div>
                    </div>
                    </div>

            <section className="form-container">
			    <div className="container">
				    <div className="row">
                        <div className="col-lg-8 col-md-8">
	                    	<div className="form-box">
	                   	        <h2>Pre-screened Financial Advisors - No Obligation - Free Service</h2>
                                   <form  onSubmit={(e)=>this.handleSubmit(e)} className="form" name="form" method="get" id="form-lead">
                                   <div className="form-group row">
								
                                    <label id="portfolabel" className="col-md-5 col-form-label form-control-label">Select Your Portfolio  Size <span>(</span><a href="#!" data-html="true" data-toggle="tooltip" className="form-hint" title="Our expert advisors specialize at handling different asset levels. Your indicated portfolio size is required for a successful match.">?</a><span>)</span>&nbsp;*</label>
                                    
                                    <div className="col-md-7">
                                        <select className="form-control" name="Q1405152631" id="portsize" required="">
                                        
                                            <option defaultValue="">Select Portfolio Size</option>
                                            <option defaultValue="27722">$100,000 - $250,000</option>
                                            <option defaultValue="27723">$250,000 - $500,000</option>
                                            <option defaultValue="27724">$500,000 - $1 million</option>
                                            <option defaultValue="36716">$1 million - $3 million</option>
                                            <option defaultValue="36717">More Than $3 million</option>
                                            <option defaultValue="76473">Less than $50,000</option>
                                            <option defaultValue="27721">$50,000 - $100,000</option>
                                        </select>
                                        <div id="rsp_size" className="error"></div>
                                        </div>
                                    </div>

                                    <div className="form-group row">
									<label id="ziplabel" className="col-md-5 col-form-label form-control-label">Zip Code <span>(</span><a href="#!" data-toggle="tooltip" data-placement="top" title="This will help us locate an in Network Expert Financial Advisor closest to you." className="form-hint">?</a><span>)&nbsp;</span>*</label>
                                         <div className="col-md-7">
                                            <input onChange={this.handleChange} type="text" className="form-control" id="sendzip" name="sendzip" size="7" maxLength="5" placeholder="Enter Your Zip Code" pattern="^[0-9]{5}" title="Five digits Zip Code" defaultValue="" required="" />
                                            <div id="rsp_zip" className="error"></div>
										</div>
								    </div>
                                    <div className="form-group row">
                                        <label id="firstlabel" className="col-md-5 col-form-label form-control-label">First Name <span>(</span><a href="#!" data-toggle="tooltip" data-placement="top" title="Required for advisor match and connect. Rest Assured your information is only shared with matched advisors and never with third party vendors. Your privacy is important to us." className="form-hint">?</a><span>)&nbsp;</span>*</label>
                                        <div className="col-md-7">
                                            <input onChange={this.handleChange} type="text" className="form-control" id="fname" name="fname" defaultValue="" maxLength="50" placeholder="Enter Your First Name" required="" />
                                            <div id="rsp_fname" className="error"></div>
                                        </div>
								    </div>
                                    <div className="form-group row">
                                            <label id="lastlabel" className="col-md-5 col-form-label form-control-label">Last Name <span>(</span><a href="#!" data-toggle="tooltip" data-placement="top" title="Required for advisor match and connect. Rest Assured your information is only shared with matched advisors and never with third party vendors. Your privacy is important to us." className="form-hint">?</a><span>)&nbsp;</span>*</label>
                                                <div className="col-md-7">
                                                    <input onChange={this.handleChange} className="form-control" type="text" id="lname" name="lastnm" defaultValue="" placeholder="Enter Your Last Name" maxLength="50" required="" />
                                                    <div id="rsp_lname" className="error"></div>
                                            </div>
								    </div>
                                    <div className="form-group row">
                                        <label id="phonelabel" className="col-md-5 col-form-label form-control-label">Mobile Number <span>(</span><a href="#!" data-toggle="tooltip" data-placement="top" title="Required for advisor match and connect. Rest Assured your information is only shared with matched advisors and never with third party vendors. Your privacy is important to us." className="form-hint">?</a><span>)&nbsp;</span>*</label>
                                        <div className="col-md-7">
                                            <input onChange={this.handleChange} type="text" className="form-control" id="phone" name="phone" defaultValue="" size="12" maxLength="10" pattern="[2-9][0-9]{9}" title="Please Enter Correct phone number" placeholder="Enter Your Phone - No space or dashes" required="" />
                                            <div id="rsp_phone" className="error"></div>
                                        </div>
								    </div>
                                    <div className="form-group row">
                                        <label id="emaillabel" className="col-md-5 col-form-label form-control-label">Email <span>(</span><a href="#!" data-toggle="tooltip" data-placement="top" title="Required for advisor match and connect. Rest Assured your information is only shared with matched advisors and never with third party vendors. Your privacy is important to us." className="form-hint">?</a><span>)&nbsp;</span>*</label>
                                        <div className="col-md-7">
                                            <input onChange={this.handleChange} type="email" className="form-control" id="email" name="email" defaultValue="" maxLength="100" placeholder="Enter Your Email Address" required="" />
                                            <div id="rsp_email" className="error"></div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <div className="disclosures-checkbox">
                                            <input onChange={this.handleChange} type="checkbox" name="acceptedterms" id="html" defaultValue="Y" checked="" />
                                            <label htmlFor="html" style={{ display:"inline-block", verticalAlign: "middle",  paddingBottom:"9px" }}>You agree to our <a href="https://www.wiseradvisor.com/include/terms.asp" target="_blank" rel="noreferrer">Terms of Services</a> and acknowledge our <a href="https://www.wiseradvisor.com/disclosure.asp" target="_blank" rel="noreferrer">disclosures</a></label>
                                            <div className="clearfix"></div>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label id="blank" className="col-md-5 col-form-label form-control-label"></label>
                                            <div className="col-md-7">
                                                <div className="row">
                                                    <div className="col-md-6 col-12">
                                                    <input  className="submit wa-submit" id="submit" type="submit" defaultValue="Search Now! >>" />
                                                        <img id="loading" height="25" src="//dnef5smmdpm5z.cloudfront.net/images/ajax-loading.gif" alt="Updating ..." style={{display:"none"}} />
                                                    </div>
                                                    <div className="col-md-6 col-12">	
                                                        <span id="siteseal"><img style={{cursor:"pointer"}} src="https://seal.godaddy.com/images/3/en/siteseal_gd_3_h_l_m.gif" alt="SSL site seal - click to verify" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>


                                    </form>   
                                   
						    </div>
					    </div>


                        <div className="col-lg-4 col-md-4">
	                 	<span style={{fontSize: "18px", marginBottom:" 10px", textDecoration: "none", marginTop:"-6px"}}>
							<strong>Why Choose WiserAdvisor</strong>
						</span>
                        <p className="ABTesting"><b>Quality:</b> All Advisors undergo strict screening to be part of our match network.</p>
                        <p className="ABTesting"><b>Accuracy:</b> We match you to advisors that closely align with your specified search parameters and needs.</p>
	                    <p className="ABTesting"><b>Simplicity:</b> Our system is easy to use and takes less than five minutes to complete.</p>
	                    <p className="ABTesting" style={{marginBottom:"24px"}}><b>Confidentiality:</b> Your information will only be provided to the advisors matched to you.</p>	
                        <div className="testi">
		                    <i className="fa fa-quote-left first-img"></i>
							<p className="first-p">Your service helped us connect with Brian who had clients similar to our situation.</p>
		                    <p>Former advisor put our cash in a cookie-cutter investment plan and we wanted to find alternative options... &nbsp;<i className="fa fa-quote-right"></i></p>
		                </div>
		                
		                <div className="testi-img">
			                <img src="//dnef5smmdpm5z.cloudfront.net/images/ppc-women.jpg" alt="women" />
			                
			                <p className="testmonial-name">Susan, a Retired School <br/>Teacher from New York</p>
			                
		                </div>
                  
                  
                  
                   </div>
                   





                    </div>
                </div>
            </section>
                
            </React.Fragment>
        )
    }
}
