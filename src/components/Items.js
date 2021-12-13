import React, { Component } from 'react';
import MenuList from './MenuList.json';
import Billing from './Billing';


export default class Items extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            items : []
        }
    }
    
    addCart = item => {
        item.count = 1
        let index = this.state.items.findIndex(dish => dish.name === item.name)
        if (index > -1 ) {
            let items = [...this.state.items]  
            items[index] = {...items[index], count: this.state.items[index].count + 1}
            this.setState({items})
        
        }else {
            this.setState({items: [...this.state.items, item] })
            } 
        }
    
    delete = (id) => {
            this.setState({items: [
            ...this.state.items.slice(0, id),
            ...this.state.items.slice(id + 1)
        ]})
    }
    
    Increment = (id) => {
        let items = [...this.state.items]  
        items[id] = {...items[id], count: this.state.items[id].count + 1}
        this.setState({items})
    }

    Decrement = (id) => {
        let items = [...this.state.items]
        items[id] = {...items[id], count: this.state.items[id].count - 1}
        this.setState({items}) 
    }
    
    

    render() {

        return (
        <>
            <div className='Menublock'>
                {this.props.displayVeg &&
                (MenuList.map((item, id) => item.id.indexOf('V')===0 && <h3 key={item.id} className={`btn btn-outline-dark m-1`} style={{backgroundColor:'#90ee90'}} onClick={() => this.addCart(item)}>{item.name} </h3> ) ) }

                {this.props.displayNonVeg && 
                (MenuList.map(item => item.id.indexOf('NV')===0 && <h3 key={item.id} className='btn btn-outline-dark m-1 nonVegItemColor' style={{backgroundColor:'#FA8072'}}  onClick={() =>  this.addCart(item)}>{item.name}</h3> )) }

                {(!this.props.displayVeg && !this.props.displayNonVeg) &&
                (MenuList.map((item) => item.id.indexOf('V')===0 ? <h3 key={item.id} className={`btn btn-outline-dark m-1`} style={{backgroundColor:'#90ee90'}} onClick={() => this.addCart(item)}>{item.name}</h3>  : <h3 key={item.id} className='btn btn-outline-dark m-1 nonVegItemColor' style={{backgroundColor:'#FA8072'}}  onClick={() =>  this.addCart(item)}>{item.name}</h3>) ) }
            </div>
            


            < Billing  items={this.state.items} Delete={this.delete} Increment={this.Increment} Decrement = {this.Decrement}/>
        </>
        )
    }
}


