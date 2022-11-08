import React, { Component } from 'react'
import styles from './ProductItem.module.css'
export default class ProductItem extends Component {
    render() {
        const {id, name, price, image } = this.props.item

        return (
            <div key={id} className={styles.productItem}>
                <img src={image} alt=''></img>
                <div className={styles.productItem__content}>
                    <h4>Name: {name}</h4>
                    <h4>Price: {price}</h4>
                </div>
                <button  onClick={()=>this.props.addToCart(this.props.item)}className={styles.productItem__btn}>Add To Cart <i class="fa-solid fa-cart-shopping"></i></button>
                <button className={styles.productItem__btn} onClick={()=>{this.props.setSelectedItem(this.props.item)}}>Detail</button>
            </div>
        )
    }
}
