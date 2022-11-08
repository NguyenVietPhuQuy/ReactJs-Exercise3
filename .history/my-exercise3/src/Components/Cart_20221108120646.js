import React, { Component } from 'react'

export default class Cart extends Component {


    render() {
        // sử dụng khi không muốn scroll kéo lên kéo xuống
        // document.getElementsByTagName("body")[0].style.overflow="hidden"
        return (
            <div className=' position-fixed w-100 h-100'
                style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    backgroundColor: "rgba(0,0,0,0.8)",
                }}>
                <div className="w-50 bg-white position-absolute p-5" style={
                    {
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        opacity: 1
                    }
                }>
                    <button onClick={this.props.hidden} className='btn-danger position-absolute' style={{ top: 15, right: 15, outline: "none", }}>X</button>
                    <h1 className='text-center fs-3'>Shopping Cart</h1>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th> Id SP</th>
                                <th> Name SP</th>
                                <th> IMG </th>
                                <th> Quantity</th>
                                <th> Price</th>
                                <th> Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.cart.map((item) => {
                                return (
                                    <tr className='text-center align-center'>
                                        <td> {item.prod.id}</td>
                                        <td>{item.prod.name}</td>
                                        <td>
                                            <img alt=''src={item.prod.image} style={{width:100}} />
                                        </td>
                                        <td>
                                            <button className='btn btn-info'>-</button>
                                            <span className='mx-2'>{item.quantity}</span>
                                            <button className='btn btn-info'>+</button>
                                        </td>
                                        <td>{item.prod.price}</td>
                                        <td>{item.prod.price*item.quantity}</td>
                                        <td>
                                            <button className='btn btn-danger'></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}
