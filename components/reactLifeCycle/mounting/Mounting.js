import React, {Component} from 'react'

export default class Mounting extends Component{

constructor(props){
    super(props)

    this.state = {
        framework: 'Angular'
    }
}
//static getDerivedStateFromProps(props, state){
  //  return {
    //    framework:props.newFramework
    //}
//}
componentDidMount(){
    setTimeout(() => {
this.setState({framework:'Vue'})
    },3000)
}

render(){
    return(
        <div>
        <h1>the framework is:{this.state.framework}</h1>
        </div>
    )
}

}