import React, { Component } from 'react'
import './App.css';
import AddItem from './AddItem';
import ProductItem from './ProductItem';
import ProductList from './ProductList'
// Creat localhost Databag
const products = [
  {
    name: 'Tanvir',
    roll: 1,
    number: 93
  },
  {
    name: 'Hasan',
    roll: 3,
    number: 80
  },
  {
    name: 'Onameca',
    roll: 7,
    number: 79
  }
];
localStorage.setItem('products', JSON.stringify(products));
//import ContactForm from './ContactForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();

    this.setState({ products });
  }

  getProducts() {
    return this.state.products;
  }
  
  onAdd(name, roll, number) {
    const products = this.getProducts();

    products.push({
      name,
      roll,
      number
    });

    this.setState({ products });
    
  }

  onDelete(name) {
    const products = this.getProducts();
    
    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });

    this.setState({ products: filteredProducts });
    
  }

  onEditSubmit(name, roll, number, originalName) {
    let products = this.getProducts();

    products = products.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.roll = roll;
        product.number = number;
      }
      return product;
    });
    this.setState({ products });
    
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-center">React-CRUD</h1>

          <AddItem
           onAdd={this.onAdd}
          />
          {
            this.state.products.map(product => {
              return (
                <ProductItem
                key={product.name}
                {...product}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
                />
              );
            })
          }
            {/*
            <ContactForm/> */}

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Student</th>
                <th scope="col">Roll</th>
                <th scope="col">Number</th>
                <th scope="col" colSpan='2'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.products.map(product => {
                  return (
                    <ProductList
                    key={product.name}
                    {...product}
                    onDelete={this.onDelete}
                    onEditSubmit={this.onEditSubmit}
                    />
                  )
                })
              }
              
            </tbody>
          </table>

          </div>
      </div>
    )
  }
}
export default App;