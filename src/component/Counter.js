import React from 'react';

class Counter extends React.Component{
    constructor(){
        super();
        this.state ={counter:0};
        this.timer = null;
    }

    componentDidMount(){
      this.timer =setInterval( ()=> {
         this.setState ({counter:this.state.counter+1});
      },2000);
    }
  
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return <span>{this.state.counter}</span>;
        
    }
}

export default Counter;