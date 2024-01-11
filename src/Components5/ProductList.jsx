import React, { Component } from 'react';
import Product from './Product';

import avatar1 from '../images/avatar1.jpg';
import avatar2 from '../images/avatar2.jpg';
import avatar3 from '../images/avatar3.jpg';

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Fruit',
                    description: 'some text will goes here',
                    submitedBy: 'Haider',
                    votes: 45,
                    imgUrl : avatar1,

                },
                {
                    id: 2,
                    name: 'Vegitables',
                    description: 'some text will goes here',
                    submitedBy: 'Ahmad',
                    votes: 13,
                    imgUrl : avatar2,


                },
                {
                    id: 3,
                    name: 'Meet',
                    description: 'some text will goes here',
                    submitedBy: 'Noman',
                    votes: 90,
                    imgUrl : avatar3,


                },
                {
                    id: 4,
                    name: 'Fast Food',
                    description: 'some text will goes here',
                    submitedBy: 'Omer',
                    votes: 91,
                    imgUrl : avatar1,

                },
            ],
        };
    }



    render() {


        return (
            <div>
                {this.state.products?.map((product, index) => (
                    <Product 
                    key={index + 'bwt123'}
                    id = {product.id}
                    name = {product.name}
                    description = {product.description}
                    submitedBy = {product.submitedBy}
                    votes = {product.votes}
                    imgUrl = {product.imgUrl}
                    />
                ))}
            </div>
        );
    }
}

export default ProductList;
