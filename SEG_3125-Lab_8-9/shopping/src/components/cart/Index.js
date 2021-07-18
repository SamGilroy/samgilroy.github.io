import React, { Component } from 'react';
import './cart.css'
import Header from "../home/header";
import Footer from "../home/footer";
import Cart from "./Cart";

class CartIndex extends React.Component {
    constructor(props) {
        super(props);

        var cartList = JSON.parse(window.sessionStorage.getItem("cartList"));

        this.state = {
            cartList: cartList,
        };
    }

    handlePay(){
        var total = 0;
        this.state.cartList.forEach(function (cart) {
            total += parseFloat(cart.price) * cart.quantity
        });

        this.props.history.push({ pathname : '/pay' , query : {
            total : total + '.00'
        }})
    }

    updateQuantity(index, quantity){
        var cartList = this.state.cartList;
        cartList[index].quantity = quantity;

        this.setState({
            cartList: cartList,
        });
    }

    removeItem(index){
        this.state.cartList.splice(index, 1);

        this.setState({
            cartList: this.state.cartList,
        });

        this.state.cartList.forEach(function(cart){
            console.log(cart.price);
        })


        window.sessionStorage.setItem("cartList", JSON.stringify(this.state.cartList));
    }

    render() {
        if(this.state.cartList.length > 0){
            return (
        
                <div className="home">
                    <Header menu2="selected"/>
    
                    <div className="content">
                        <div className="cart cart-title">
                            <div className="cart-pic">
                                Product
                            </div>
                            <div className="cart-item-1">
                                Price
                            </div>
                            <div className="cart-item-2">
                                Quantity
                            </div>
                            <div className="cart-item-3">
                                Total
                            </div>
                        </div>

                        {
                            this.state.cartList.map((item, index) => {
                             return <Cart 
                             key={item.no} 
                             no={item.no} 
                             name={item.name} 
                             price={item.price} 
                             index={index} 
                             updateQuantity={this.updateQuantity.bind(this)}
                             removeItem={this.removeItem.bind(this)}
                             />;
                         })
                        }

                        <div className="cart cart-end">
                            <div className="check-out" onClick={() => this.handlePay()}>
                                Check Out
                            </div>
                        </div>

                    </div>
    
                    <Footer/>
                </div>
            );    
        }



        return (
        
            <div className="home">
                <Header menu1="selected"/>

                <div className="content cart-div">
                    Shopping cart is empty!
                </div>

                <Footer/>
            </div>
        );
    }
}


export default CartIndex;