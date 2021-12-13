import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return ( 
        
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                    <div className="container-fluid ">
                        <h4 className="navbar-brand" >Royal Kitchen</h4>
                    </div>

                </nav>   

                <div>
                    <div className="row ">
                        <div className="col text-center blocks" >Menu</div>
                        <div className="col text-center blocks">Items</div>
                        <div className="col text-center blocks">Cart</div>
                    </div>
                </div>
        </div>
        )
    }
}

export default Navbar

