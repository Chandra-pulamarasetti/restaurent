import React, { Component } from 'react';
import Items from './Items';

class Menu extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isDisplayVeg: false,
            isDisplayNonVeg : false 
        } 
    }

    onClickVeg = () => {
        this.setState({isDisplayVeg: true})
        this.setState({isDisplayNonVeg: false})
    }

    onClickNonVeg = () => {
        this.setState({isDisplayNonVeg: true})
        this.setState({isDisplayVeg: false})
    } 

    doubleClickVeg = () => {
        this.setState({isDisplayNonVeg: false})
        this.setState({isDisplayVeg: false})
    }

    doubleClickNonVeg = () => { 
        this.setState({isDisplayNonVeg: false})
        this.setState({isDisplayVeg: false})
    }

    render() {
        return (
            <>
                <div className='Menublock'>
                    <h6 style={{backgroundColor:'green', padding:'15px', borderRadius:'5px', color:'white'}}  onClick={this.onClickVeg} onDoubleClick={this.doubleClickVeg}>Veg</h6>
                    <h6 style={{backgroundColor:'red', padding:'15px' , borderRadius:'5px' , color:'white'}} onClick={this.onClickNonVeg} onDoubleClick={this.doubleClickNonVeg}>Non-Veg</h6>
                </div>

                <Items displayVeg= {this.state.isDisplayVeg} displayNonVeg= {this.state.isDisplayNonVeg} />

            </>
        )
    }
}


export default Menu;
