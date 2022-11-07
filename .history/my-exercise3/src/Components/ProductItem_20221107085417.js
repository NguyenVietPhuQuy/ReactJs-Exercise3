import React, { Component } from 'react'
import styles from './ProductItem.module.css'
export default class ProductItem extends Component {
    render() {
        return (
                <div className={styles.productItem}>
                    <img src="http://svcy3.myclass.vn/images/nike-air-max-270-react.png" alt=''></img>
                    <h4>Name</h4>
                    <h4>Price</h4>
                    <button>Add To Cart <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
        )
    }
}
