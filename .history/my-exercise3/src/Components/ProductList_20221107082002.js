import React, { Component } from 'react'
import styles from './ProductList.module.css'
import clsx from 'clsx'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <section className={clsx(styles.container, styles.main)}>
                    <div className={styles.productList__row}>
                        <div className={styles.productList__col}>
                        <div className={styles.productItem}>
                            <img src='' alt=''></img>
                            <h4>Name</h4>
                            <h4>Price</h4>
                            <button>Add To Cart</button>
                        </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}
