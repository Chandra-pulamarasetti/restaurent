import React, { Component } from 'react';
import CartItem from './CartItem';

export default class Billing extends Component {


    render() {
        let amount = this.props.items.map(item => parseInt(item.price) * parseInt(item.count)).reduce((prev, curr) => prev + curr, 0)
        let gstAmount = (amount*0.18).toFixed(2)
        let totalAmount = (parseFloat(amount) + parseFloat(gstAmount)).toFixed(2)
        return (
            <>
            <div className='Menublock'>

            { this.props.items.length > 0 ? 

                <table className="table table-striped mb-3 p-0">
                    <thead>
                        <tr>
                        <th scope="col">Sl.No</th>
                        <th scope="col">Item</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map((item, id) => <CartItem key={id} 
                                                                            id={id} 
                                                                            slNumber={id+1} 
                                                                            item={item} 
                                                                            Increment = {this.props.Increment}
                                                                            Decrement={this.props.Decrement}
                                                                            Delete={() => this.props.Delete(id)}
                                                                    />)
                        } 
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Amount :</td>
                                    <td>&#8377; { amount + '.00'}</td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>GST (18%):</td>
                                    <td>&#8377; {gstAmount}</td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Payable Amount :</td>
                                    <td>&#8377; {totalAmount}</td>
                                </tr>
                    </tbody> 
                </table> :  <div>
                                <h1 style={{fontFamily:'cabin sketch', color:'blue'}}>Add quickly</h1>
                                <h1 style={{fontFamily:'cabin sketch', color:'red'}}>Cart is Empty</h1>
                            </div>}
        
            </div>
                
            </>
        )
    }
}
