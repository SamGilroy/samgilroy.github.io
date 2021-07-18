import React from 'react';
import './home.css'
import {withRouter} from "react-router-dom";
import intl from 'react-intl-universal';	

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locale: localStorage.getItem('locale') == 'en'? 'zh' : 'en',
            language: localStorage.getItem('locale') == 'en'? 'Chinese' : '英文'
        };

        console.log(localStorage.getItem('locale'))
    }

    handleCart(){
        this.props.history.push({ pathname : '/cart'})
    }

    handleLanguage(){
        localStorage.setItem('locale', this.state.locale);

        if(this.props.location.pathname == '/'){
            window.location.reload() 
        }else{
            this.props.history.push({ pathname : '/'})
        }
    }

    render() {
        return (
            <div className="header">
                <div className="logo">SEG3125</div>
                <div className="menu">
                    <ul>
                        <li><a href="#/" className={this.props.menu1}>{intl.get('Home')}</a></li>
                        <li><a href="#/categories"  className={this.props.menu2}>{intl.get('Categories')}</a></li>
                        <li><a href="#/contact" className={this.props.menu3}>{intl.get('Contact')}</a></li>
                    </ul>
                </div>
                <div className="universal" onClick={() => this.handleLanguage()}>{this.state.language}</div>
                <div className="shopping-cart" onClick={() => this.handleCart()}></div>
            </div>
        );
    }
}


export default withRouter(Header);