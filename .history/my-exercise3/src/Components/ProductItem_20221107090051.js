import React, { Component } from 'react'
import styles from './ProductItem.module.css'
export default class ProductItem extends Component {
    render() {
        const {name, price, image} = this.props.item
        return (
                <div className={styles.productItem}>
                    <img src={image} alt=''></img>
                    <h4>Name: {name}</h4>
                    <h4>Price: {price}</h4>
                    <button>Add To Cart <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
        )
    }
}
