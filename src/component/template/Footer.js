import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="wa-footer">
			                <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="text-center copy-right">
                                            <p className="copy-right"><span>©&nbsp;2021&nbsp;WiserAdvisor.com All Rights Reserved |</span>
                                            <a href="https://www.wiseradvisor.com/include/terms.asp" target="_blank" rel="noreferrer" >Terms of Use </a> &nbsp;|&nbsp;
                                            <a href="https://www.wiseradvisor.com/include/privacy.asp" target="_blank" rel="noreferrer" >Privacy Policy</a>
                                            </p>
                                        </div>
                                        <p className="text-center">WiserAdvisor.com is America's oldest and largest independent network of screened financial advisors. We make it easy and convenient for consumers to find and connect with screened advisors in their area.  * Financial Advisors in our network may be dually registered advisors; in addition to being registered as an RIA, may also be registered representatives offering securities through broker dealers. ** We pre-screen advisors for experience, advisor compensation (fee-based or fee-only), licensing and disclosures with SEC/<a style={{color:"#15c"}} href="//www.finra.org/" rel="noreferrer" target="_blank">FINRA</a>. By using this site you agree to our terms of service.</p>
                                    
                                    </div>
                                </div>
                            </div>
                    </footer>
                
            </React.Fragment>
        )
    }
}
