import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div className='bg-dark position-relative w-100 top-0 left-0' >
                <div className="w-50 bg-white " >
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
