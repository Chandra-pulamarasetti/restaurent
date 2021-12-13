import React, { Component } from 'react'

export default class CartItem extends Component {
    
    render() {

        return (
            <>
                <tr style={{backgroundColor: this.props.item.id.indexOf('V')===0 ? '#addfad' : '#ffcccb'}} key ={this.props.id}>
                    <th scope="row">{this.props.slNumber}</th>
                    <td>{this.props.item.name}</td>
                    <td><span className={`btn btn-outline-${this.props.item.id.indexOf('V')===0 ? 'success' : 'danger'}`} onClick={() => this.props.Increment(this.props.id)} >+</span><span className='btn' style={{backgroundColor: this.props.item.id.indexOf('V')===0 ? '#addfad' : '#ffcccb'}}>{this.props.item.count}</span><span className={`btn btn-outline-${this.props.item.id.indexOf('V')===0 ? 'success' : 'danger'}`} onClick={this.props.item.count > 1 ? () => this.props.Decrement(this.props.id)  : this.props.Delete}>-</span></td>
                    <td> &#8377;{ this.props.item.price * this.props.item.count + '.00' }</td>
                </tr>
            </>
        )
    }
}
