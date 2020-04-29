import React, { Component } from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import About from './components/pages/About';
import axios from 'axios';

 var {btnStyle} = require('./Styles');

class App extends Component {
  state =  {
    siteTitle : 'This is a site title',
    products: [],
    inputtext: "",
    sp: false
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10').then(
      res => this.setState({products: res.data})
      
    )
  }



  showProducts = (e) =>{
    this.setState({sp: true});
    
  }
  testHandle = (e) =>{
    this.setState({inputtext: e.target.value})
    console.log(this.state.inputtext);
    
  }
  
  render() {
    var showProductsMarkup = '';
    if(this.state.sp === true){
      showProductsMarkup = <Products items = {this.state.products}/>
    }
    return (
      <Router>
        <div>
        <Header/>
        <Route exact path="/" render={props =>(
          <React.Fragment>
            <h2>{this.state.siteTitle}</h2>
            <h3>Products</h3>

            
            
            <button style={btnStyle} onClick={this.showProducts} >Show Product</button>
            {showProductsMarkup}
            <form action= "" >
                <input type="text" placeholder="My text" onChange = {this.testHandle} />
            </form>

            <a href="/about">Go to about page</a>
          </React.Fragment>
        )} />
        
        <Route path="/about" component={About}/>
        
      </div>
      </Router>
    )
  }
}

export default App;
