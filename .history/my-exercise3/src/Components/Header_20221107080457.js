import React, { Component } from 'react'
import styles from './Header.module.css'
export default class Header
 extends Component {
  render() {
    return (
      <div className={styles.container}>
        <span className={styles.header}>Shoes Shop</span>
      </div>
    )
  }
}
