import React, { Component } from 'react';




export default class header extends Component {
    constructor(props){

        super(props);
    }
    render() {
        // hide=this.props?.hidetext;
        // console.log(hide)
        return ( 
            
            <React.Fragment>
                
                <div className="container">
                    <div className="row wa-header-space">
                        <div className="col-lg-5 wa" id="landing-page-logo">
                            <img src="https://static.wiseradvisor.com/wiseradvisor/v2/images/logo.png" alt="financial-advisor.jpg"/>
                        </div>
                        {/* {
                            (hide==='1') ? '':
                            <div className="col-lg-7 wa" id="header-heading">
                                <h1>Compare Top Financial Advisors in Your Area</h1>
                            </div>
                        } */}
                            	
                    </div>
               
               
                </div>
                
	    	
                                 
            </React.Fragment>
        )
    }
}
