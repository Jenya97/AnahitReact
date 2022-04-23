import { Component } from "react";



class City extends Component{
  constructor(props){
   super();
   this.state={
     
   }
  }
  render(){
      return(
          <div>
          <h2>{this.props.name}</h2>
          <img src={this.props.src} alt=''/>
          <p>{this.props.color}</p>
          </div>
      )
  }
}


export default City;