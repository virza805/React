import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return this.props.items.map((product) => (
        <li key={product.id}>
            <img src={product.thumbnailUrl} />
        </li>
        ))

        
    }
}

