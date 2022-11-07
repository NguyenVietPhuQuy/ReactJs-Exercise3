import React, { Component } from 'react'
import styles from './Home.module.css'
import Header from './Header.js'
export default class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Header/>

      </div>
    )
  }
}
