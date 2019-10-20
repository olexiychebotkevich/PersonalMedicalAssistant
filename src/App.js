import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import DatePicker from './components/DatePicker/index'
import { height } from '@material-ui/system';


const NavBar = () => (
  <div className="navbar">
    <h3>Personal Medical Assistant</h3>
  </div>
);

const Template = (props) => (
  <div>
    <NavBar />
    
    <div>
    <h1 style={{textAlign:'center'}}>Personal Medical Assistant</h1>
    <img className="displayed" src="https://github.com/novakvova/AndroidBackend/blob/master/BackEndChoco/uploadedimages/57d78085-aa47-4cba-aee2-eca9e227bee4.jpg?raw=true"  alt="aaaa yyyy begemoot"/>
    </div>
  </div>
);

const CurrentTasks = () => (
  <Template title="Current Tasks" status="Current">
   
    </Template>
  
);

const CompletedTasks = () => (
  <Template title="Completed Tasks" status="Completed"/>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={CurrentTasks}/>
          <Route path="/completed" component={CompletedTasks}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;