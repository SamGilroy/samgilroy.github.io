import React from 'react';
import './home.css'
import Footer from'./footer'
import Header from'./header'
import { Redirect } from "react-router-dom";
import intl from 'react-intl-universal';


const locales = {
    "en": require('../../locales/en-US.json'),
    "zh": require('../../locales/zh-CN.json'),
  };

  
  
class Home extends React.Component {
    state = {initDone: false}

    componentDidMount() {
      this.loadLocales();
    }
 
    loadLocales() {
        if(!localStorage.getItem('locale')){
            localStorage.setItem("locale","en")
        }
        
       // init method will load CLDR locale data according to currentLocale
        // react-intl-universal is singleton, so you should init it only once in your app
        intl.init({
            currentLocale: localStorage.getItem('locale'), // TODO: determine locale here
            locales,
        })
        .then(() => {
            // After loading CLDR locale data, start to render
            this.setState({initDone: true});
        });
      }
   
    constructor(props) {
        super(props);
        this.state ={
            brandName : ''
        }

        var uuid = new Date().getTime();
        var productList = new Array();
        for (var i=1;i<=6;i++) {
            productList.push({
                no: uuid++,
                quantity :1,
                name : 'Green Dress with details',
                price : Math.floor(Math.random() * 100) + '.00',
                brand : 'Man',
                desc: 'Description of clothing',
                image: 'assets/product' + i + '.png'
            });
        }

        for (var i=1;i<=6;i++) {
            productList.push({
                no: uuid++,
                name : 'Green Dress with details',
                price : Math.floor(Math.random() * 100) + '.00',
                brand : 'Woman',
                desc: 'Description of clothing',
                image: 'assets/category_' + i + '.png'
            });
        }

        for (var i=1;i<=5;i++) {
            productList.push({
                no: uuid++,
                name : 'Green Dress with details',
                price : Math.floor(Math.random() * 100) + '.00',
                brand : 'Casual',
                desc: 'Description of clothing',
                image: 'assets/collection' + i + '.png'
            });
        }


        window.sessionStorage.setItem("productList",JSON.stringify(productList));

        window.sessionStorage.setItem("cartList",JSON.stringify(new Array()));
    }

    onChange(e){
        this.setState({
            brandName : e.target.value
        })
    }

    handleSearch(){
        this.props.history.push({ pathname : '/categories' , query : { brandName : this.state.brandName }})
    }

    render() {
        
        return (
            <div className="home">
                <Header menu1="selected"/>

                <div className="content">
                    <div className="content_top">
                        <div className="content_image"></div>
                    </div>
                    <div className="content_search">
                        <div className="bar1">
                            <input type="text" placeholder= {intl.get('Search')}
                                   value = {this.state.brandName}
                                   onChange ={this.onChange.bind(this) }
                            />
                            <button type="button"  onClick={() => this.handleSearch()}>{intl.get('SearchBtn')}</button>
                        </div>
                    </div>
                    <div className="content_brand">
                        <div className="content_brand_item">
                            {intl.get('Man')}
                        </div>
                        <div className="content_brand_item">
                            {intl.get('Woman')}
                        </div>
                        <div className="content_brand_item">
                            {intl.get('Casual')}
                        </div>
                    </div>
                </div>

                <Footer/>

            </div>
        );
    }
}

export default Home;