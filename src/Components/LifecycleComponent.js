import React, { Component } from 'react'
import NavbarUnmount from './NavbarUnmount';
export default class LifecycleComponent extends Component {
    constructor(){
      super();
      this.state={
        counter: 0,
        show: true
      }
        console.log("Inside a Contructor");
    }

    componentDidMount(){
      console.log('Inside a Component Did Mount');
    }

    componentDidUpdate(){
      console.log("Inside a Component did Update");
      
    }
  render() {
    console.log("Inside a Render");
    return (
      <>
      { this.state.show ? <NavbarUnmount/> : null} <br />
      <button onClick={()=>this.setState({show: !this.state.show})}>Enable/Disable</button>
      <br /><br />
      <h3>LifeCycle Methods</h3>
      {this.state.counter}
      <button onClick={()=> this.setState({counter: this.state.counter+1})}>Click</button>


      {console.log("Inside a Return")}
      </>
    )
  }
}
