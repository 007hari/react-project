
import React, { Component } from 'react'

export default class Headerli extends Component {

    constructor( props){
        super(props);
        this.state={
            arre:['Tell Us Your Financial Goals', 'Compare Advisors', 'Select the Advisor That Is Right for You' ]
        }

    }

    render() {
        let arr = this.state.arre;
        return (
            <div>
                <ol>
                    {
                      arr.map((value,key)=>

                      <li key={key}>{value}</li>
        )  
                    }

                </ol>
                
            </div>
        )
    }
}

  