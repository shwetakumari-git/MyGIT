import React, {Component} from 'react'

 export default class Unmounting extends Component{
     constructor(){
         super()
         this.state = {
             show: true
         }
     }
     deleteValue = () => {
         this.setState({show: false})
     }
     render (){
         let myValue;
         if(this.state.show){
             myValue=<Header/>
         }
         return(
             <div>
                 {myValue}
                 <button onClick={this.deleteValue}>delete</button>
                 </div>
             
         )
     }
 }
 class Header extends React.Component{
     componentWillUnmount(){
         alert('Are you sure??')
     }
     render(){
         return(
             <>
             <h2>the end</h2>
             </>
         )
     }
 }