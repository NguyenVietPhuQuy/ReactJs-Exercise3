import React, { Component } from 'react'
import styles from './Home.module.css'
import Header from './Header.js'
import ProductList from './ProductList'
import clsx from 'clsx'
export default class Home extends Component {
  render() {
    return (
      <div key="header" className={clsx(styles.home,styles.container)}>
        <Header/>
        <ProductList/>
      </div>
    )
  }
}
