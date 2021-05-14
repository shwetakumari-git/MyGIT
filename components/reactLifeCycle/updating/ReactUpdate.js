import React, { Component } from 'react';

export default class ReactUpdate extends Component{
    constructor(props){
        super(props)
        this.state ={
            snack: 'French fries'
        }
    }
    componentDidMount(){
        setTimeout(()=> {
            this.setState({snack:'pani puri'})
        },3000)
    }
    shouldComponentUpdate(){
        return true
    }

getSnapshotBeforeUpdate(prevProps,prevState){
    return (
        document.getElementById('beforeupdate').innerHTML = "Before update:" + prevState.snack
    )
}
componentDidUpdate(prevProps, prevState, snapshot){
    document.getElementById('afterupdate').innerHTML = "After Update:" + this.state.snack
 
}

    render(){
        return(
            <div>
                <h2>snack order:
                    {this.state.snack}
                </h2>

                {/*get snap shot */}
 <div id="beforeupdate"></div>

                <div id="afterupdate"></div>
            </div>
        )
    }
}