import React, { Component } from 'react'
import CartRedux from './CartRedux'
import ProductListRedux from './ProductListRedux'
 class Home extends Component {

    render() {
        return (
            <div className="container">
                <h3>Danh sách sản phẩm</h3>
                <ProductListRedux/>
                <CartRedux/>
            </div>
        )
    }
}


export default (Home)