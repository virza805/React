import React, { Component } from 'react'
import ProductList from './ProductList'

class Crud extends Component {
    render() {
        return (
            <div className= "App">
                <div className="container">
                    <h1 className="text-center">React-CRUD</h1>
                    <ProductList/>
                </div>
            </div>
        )
    }
}
export default Crud;