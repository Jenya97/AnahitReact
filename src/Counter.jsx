import { Component } from "react";


class Counter extends Component{
     constructor(props){
      super();
      this.state={
          count:60,
      }
    //   this.increment=this.increment.bind(this)
      }
    //   increment(){
    //     this.setState({count:this.state.count+1})  
    //    }
     increment=()=>{
        // this.setState({count:this.state.count+ +this.props.number}) 
        this.setState((state,props)=>{
            return {count:state.count+ +props.number}
        })
     }

    render(){
        return(
            <div>
            <p style={ {
                color:'blue',
                fontSize:'25px',
                } }>{this.state.count}</p> 
     <button onClick={this.increment}
      style={{borderRadius:'5px',background:'none',border:'solid pink',color:'pink'}}
      >+</button>
     <button onClick={()=>this.setState({count:this.state.count-1}) }>-</button>
            </div>
        )
    }
}

export default Counter;