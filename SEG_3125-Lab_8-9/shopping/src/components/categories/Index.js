import React, { Component } from 'react';
import './categories.css'
import Header from "../home/header";
import Footer from "../home/footer";
import Clothing from "../categories/Clothing";
import intl from 'react-intl-universal';


class Categories extends React.Component {
    constructor(props) {
        super(props);

        var productList = JSON.parse(window.sessionStorage.getItem("productList"));
        if(props.location.query){
            var brandName = props.location.query.brandName;
            if (brandName){
                productList = productList.filter(function (product) {
                    return product.brand == brandName;
                })
            }
        }

        this.state = {
            productList: productList,
            brand1: 'selected',
            brand2: '',
            brand3: '',
            brand4: ''
        };
    }

    handleSwitch(brand){
        var brand1 = '',brand2 = '',brand3 = '',brand4 = '';
        if(brand == 'Man'){
            brand2 = 'selected';
        }else if(brand == 'Woman'){
            brand3 = 'selected';
        }else if(brand == 'Casual'){
            brand4 = 'selected';
        }else{
            brand1 = 'selected';
        }

        var productList = JSON.parse(window.sessionStorage.getItem("productList"));
        if (brand){
            productList = productList.filter(function (product) {
                return product.brand == brand;
            })
        }

        this.setState({
            productList: productList,
            brand1: brand1,
            brand2: brand2,
            brand3: brand3,
            brand4: brand4
        });
    }

    render() {
        return (
            <div className="home">
                <Header menu2="selected"/>

                <div className="content content-categories">
                    <div className="categories-title">
                        <span className={this.state.brand1} onClick={() => this.handleSwitch()}>{intl.get('All')}</span>
                        <span className={this.state.brand2} onClick={() => this.handleSwitch('Man')}> {intl.get('Man')}</span>
                        <span className={this.state.brand3} onClick={() => this.handleSwitch('Woman')}>{intl.get('Woman')}</span>
                        <span className={this.state.brand4} onClick={() => this.handleSwitch('Casual')}> {intl.get('Casual')}</span>
                    </div>
                    {
                        this.state.productList.map((item, index) => {
                         return <Clothing key={index} item={item} />;
                     })
                    }
                </div>

                <Footer/>
            </div>
        );
    }
}

export default Categories;