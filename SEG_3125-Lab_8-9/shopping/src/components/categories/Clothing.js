import React from 'react';
import './categories.css'
import {withRouter} from "react-router-dom";
import intl from 'react-intl-universal';


class Clothing extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDetail(){
        this.props.history.push({ pathname : '/detail' , query : {
            name : this.props.item.name,
            price : this.props.item.price,
            brand : this.props.item.brand,
            desc : this.props.item.desc
        }})
    }

    handleAddCart(){
        var no = this.props.item.no;
        var productList = JSON.parse(window.sessionStorage.getItem("productList"));
        var product = productList.find(function (product) {
            return product.no == no;
        })

        var cartList = window.sessionStorage.getItem("cartList");
        var cartList = JSON.parse(window.sessionStorage.getItem("cartList"));
        if(cartList.length == 0){
            cartList.push(product);
            window.sessionStorage.setItem("cartList",JSON.stringify(cartList));
            alert(intl.get('alert3'));
            return;
        }

        var cart = cartList.find(function (c) {
            return c.no == product.no;
        })

        if(cart){
            alert(intl.get('alert4'));
            return;
        }

        alert(intl.get('alert3'));

        cartList.push(product);
        window.sessionStorage.setItem("cartList",JSON.stringify(cartList));
    }

    handlePurchase(){
        var total = this.props.item.price;
        this.props.history.push({ pathname : '/pay' , query : {
            total : total
        }})
    }

    render() {
        return (
            <div className="clothing">
                <div className="clothing-pic">
                    <img src={this.props.item.image}  alt=""/>
                </div>
                <div className="clothing-info">
                    <span>${this.props.item.price}</span>
                    <span onClick={() => this.handleDetail()}>{intl.get('Detail')}</span>
                    <span onClick={() => this.handleAddCart()}>{intl.get('Add')}</span>
                    <span onClick={() => this.handlePurchase()}>{intl.get('Purchase')}</span>
                    
                </div>
            </div>
        );
    }
}

export default withRouter(Clothing);
