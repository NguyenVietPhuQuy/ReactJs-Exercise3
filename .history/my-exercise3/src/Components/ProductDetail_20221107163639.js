import React, { Component } from 'react'

export default class ProductDetail extends Component {
  render() {
    const {image,price,description,quantity} = this.props.item;
    return (
      <div key="Detail">
            <h4>Tên Sản Phẩm:</h4>
            <img alt='' src={image}></img>
            <h4>Gía:{price}</h4>
            <h4>Mô tả: {description}</h4>
            <h4>số lượng: {quantity} </h4>
      </div>
    )
  }
}
