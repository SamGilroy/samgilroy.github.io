import React, { Component } from 'react';
import './categories.css'
import Header from "../home/header";
import Footer from "../home/footer";
import intl from 'react-intl-universal';


class Detail extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="home">
                <Header menu2="selected"/>

                <div className="content detail">
                    <div className="title">{this.props.location.query.name}</div>
                    <div><img src='assets/product1.png' alt=""/></div>
                    <div className="label">{intl.get('Price')}:  ${this.props.location.query.price}</div>
                    <div className="label">{intl.get('Brand')}:  {this.props.location.query.brand}</div>
                    <div className="label">{intl.get('Description')}:  {this.props.location.query.desc}</div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default Detail;