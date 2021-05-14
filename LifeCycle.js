import React, {Component} from 'react'

export default class LifeCycle extends Component{

constructor(props){
    super(props)

    this.state = {
        
 animal: '...DOG....',
 show: true

    }
}
    componentDidMount(){
        setTimeout(() => {
    this.setState({animal:'...CAT..'})
        },3000)
    }
    

  
    deleteValue = () => {
        this.setState({animal: false})
    }
    render (){
        let myValue;
        if(this.state.animal){
            myValue=<Header/>
        }
        
        return(
            <div>
<h2>
                    {this.state.animal}
                </h2>

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
            <h2>Delete the item</h2>
            </>
        )
    }
}