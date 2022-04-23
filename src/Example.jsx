import { Component } from "react";


class Example extends Component{
    constructor(props){
        console.log('constructor');
        super();
        this.state={
            counter:0,
            counter2:7,
            users:[]
        }
    }
    static getDerivedStateFromProps(props,state){
     console.log(props, state);
     return null
    }
    
    componentDidMount(){
        fetch('https://reqres.in/api/users?page=2')
        .then(response=>response.json())
        .then(users=>this.setState({users:users.data}))
    }
    shouldComponentUpdate(){
        return true
    }
    getSnapshotBeforeUpdate(previousProps,previosState){
     console.log(previousProps,previosState);
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    render(){
    
    
        return(
            <>
            {this.state.counter}
            <button onClick={()=>this.setState({counter:this.state.counter+1})}>+</button>
            {this.state.users.map(i=>(
                <div key={i.id}>
               <h2>{i.first_name}</h2>
                </div>
            ))}
            </>
        )
    }
}

export default Example;