import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div className=' position-absolute w-100 h-100' 
            style={{
                top:"50%",
                left:"50%",
                transform:"translate(-50%,-50%)",
                backgroundColor:"rgba(0,0,0,0.8)",
            }}>
                <div className="w-50 bg-white position-absolute"  style={
                    {
                        top:"50%",
                        left:"50%",
                        transform: "translate(-50%,-50%)",
                        opacity:1
                    }
                }>
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
                            <td>123</td>
                            <td>Nike1231</td>
                            <td>
                                <img alt='' />
                            </td>
                            <td>
                                <button className='btn btn-info'>-</button>
                                <span className='mx-2'>2</span>
                                <button className='btn btn-info'>+</button>
                            </td>
                            <td>1000</td>
                            <td>2000</td>
                            <td>
                                <button className='btn btn-danger'></button>
                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
