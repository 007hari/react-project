import React, { Component } from 'react'
import Header from './template/Header';

export default class Thanku extends Component {
   
    render() {
        return (
            <React.Fragment>
                <Header hidetext="1"/>
                <section id="new-thank">
                    <div className="container">
                        <div className="thanku-outer">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-warp font-weight-bold thanku-submission">
                                        <h1>Thank You test!</h1>
                                        <p className="mt-0">You are on your way to being matched to qualified advisors from WiserAdvisor, America's oldest and largest independent network of pre-screened financial advisors ready to help secure your financial future.</p>
                                    </div>
                                    
                                </div>
                            </div> 
                            </div>    
                            <div className="row">
                                <div className="col-lg-8 col-12"> 
                                    <div className="steps">
                                    
                                    <p>NEXT STEPS in the process for you:</p>
                                    <ul>
                                        <li className="one-img">
                                            <h2>Check your email.</h2> 
                                            <p>We will reach out by email &amp; phone in order to confirm your information to find the best match for you.</p>
                                        </li>
                                        <li className="two-img">
                                            <h2>Review your Advisors.</h2> 
                                            <p>Once confirmed, we will then email you up to 3 recommended financial advisors near you. Review their profiles and credentials and reach out to them to find the best fit for your specific needs</p>
                                        </li>
                                        <li className="three-img">
                                            <h2>Talk to the Advisors.</h2> 
                                            <p>WiserAdvisor recommended pre-screened financial advisors will reach out to you within 24-48 hours. Consult with all recommended financial advisors to make the best decision for you. Remember, most of our financial advisors provide a <strong>Free Initial Consultation</strong>. The financial advisors have clean records. Numerous years of experience &amp; are registered with FINRA and SEC.</p>
                                        </li>
                                    </ul>
                                    <div className="call">
                                        <h2>You may also call 571-200-1703 or 571-322-8103.</h2> 
                                        <p>An experienced WiserAdvisor consultant is available during business hours (9am-5pm EST) to confirm and review your information and match you to financial advisors near you that best suit your needs. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">   
                                
                                <div className="confirm-box-1">
                                    <h3>Why WiserAdvisor?</h3>
                                    <p>WiserAdvisor has over 20 years experience in helping customers find their ideal financial advisor and reach their financial goals. WiserAdvisor has helped hundreds of thousands of people like you since 1998 and is a trusted source in the field.</p> 
                                </div>
                                </div>

                        </div>
                        
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <div className="suggestion">
                                    <h1>Important suggestions when selecting a financial advisor:</h1>
                                    <ul>
                                        <li>
                                            <h2>Respond quickly to the advisors' phone calls and emails.</h2>
                                            <p>This will allow the advisor to speak with you and get a better understanding of the services you are looking for. It will also give you the chance to set up an in-person appointment to interview the advisor.</p>
                                        </li>
                                        <li>
                                            <h2>Make sure to speak with each advisor before making a decision.</h2>
                                            <p>To ensure that you are selecting the best financial advisor, make sure to speak and meet with each advisor before making a final decision. Focus on integrity, qualifications and professional skills.</p>
                                        </li>
                                        <li>
                                            <h2>Distance should not be the most important factor in your decision.</h2>
                                            <p>Don't limit yourself to choosing the advisor closest to your home. You should base your decision on whether each advisor meets your expectations and can provide you with the best solution. Advisors are often willing to accommodate you when selecting meeting times and locations.</p>
                                        </li>
                                    </ul>
                                    <p style={{fontSize:"14px"}}>Because we realize how important it is for you to choose an advisor that is truly an ideal fit, we have prepared some <strong>tips and guidelines</strong> for you to use when you are contacted by your selected advisors. These tips should help you to ask all the right questions and to make an informed, responsible choice.</p>
                                    <p style={{fontSize:"14px"}}>Please <a href="https://www.wiseradvisor.com/interview-tips.asp?id=-1" target="_blank" rel="noreferrer">click here</a> to read "Interview Tips"</p>
                                    <p style={{fontSize:"14px"}}>Please <a href="https://www.wiseradvisor.com/choose-advisor.asp?id=-1" target="_blank" rel="noreferrer">click here</a> to read "How to Choose the Right Advisor"</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

               
                
            </React.Fragment>
        )
    }
}
