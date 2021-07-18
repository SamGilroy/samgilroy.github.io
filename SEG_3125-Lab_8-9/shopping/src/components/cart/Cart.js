import React from 'react';
import './cart.css'

class Cart extends React.Component {
    constructor(props) {
        super(props);

        if (props.price){
            this.state = {
                quantity: 1,
                price: props.price,
                total: props.price,
            };
        }
    }

    handleQuantity(flag){
        var currenQuantity = this.state.quantity;
        if (flag>0){
            ++currenQuantity;
        }else {
            --currenQuantity;
        }

        if (currenQuantity <= 0){
            currenQuantity = 1;
        }
        this.setState({
            quantity: currenQuantity,
            total: currenQuantity * this.state.price,
        });

        this.props.updateQuantity(this.props.index, currenQuantity);
    }

    removeItem(){
        this.props.removeItem(this.props.index);
    }


    render() {
        return (
            <div className="cart">
                <div className="cart-pic">
                    <img src='assets/product1.png' alt=""/>
                </div>
                <div className="cart-item-1">
                    ${this.state.price}
                </div>
                <div className="cart-item-2">

                    <span className="operating" onClick={() => this.handleQuantity(-1)}>-</span>
                    <span>{this.state.quantity}</span>
                    <span className="operating" onClick={() => this.handleQuantity(1)}>+</span>
                </div>
                <div className="cart-item-3">
                    ${this.state.total}  
                </div>
                <div className="cart-item-4" onClick={() => this.removeItem()}>
                    Remove
                </div>
            </div>
        );
    }
}

export default Cart;
