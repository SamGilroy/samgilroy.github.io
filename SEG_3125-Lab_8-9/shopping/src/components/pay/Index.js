import React, { Component } from 'react';
import './pay.css'
import Header from "../home/header";
import Footer from "../home/footer";
import intl from 'react-intl-universal';


class Payment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            information: {
                CardNumber: undefined
            },

            total: props.location.query? props.location.query.total : 0,
        };
    }

    handlePlaceOrder(){
      //Users cannot enter the wrong payment information
      var information = this.state.information;
      for(var key in information){
            if(!information[key]){
                alert(intl.get('alert1'));
                return
            }
      }

      if(isNaN(information.CardNumber)){
            alert(intl.get('alert2'));
            return
        }

        //Empty the shopping cart after placing the order
        window.sessionStorage.removeItem("cartList");

        alert(intl.get('alert3'));

        //Direct users to the homepage
        this.props.history.push({ pathname : '/'})
    }

    onCardNumberChange(e){
        var information = this.state.information;
        information[e.target.name] = e.target.value;
        this.setState({
            information: information
        })
    }

    render() {
        return (
        
            <div className="home">
                <Header menu2="selected"/>

                <div className="content pay-content">
                    <div className="pay-title border-bottom">
                         {intl.get('Payment')}
                    </div>
                    <div className="shopping-information border-bottom">
                        {intl.get('ShoppingInformation')}

                        <div className="pay-information-item">
                            <p><span>{intl.get('FirstName')}:</span> <input type="text" name="FirstName" onChange ={this.onCardNumberChange.bind(this) }/></p>
                            <p><span>{intl.get('LastName')}:</span>  <input type="text" name="LastName" onChange ={this.onCardNumberChange.bind(this) }/></p>
                            <p><span>{intl.get('Address')}:</span>  <input type="text" name="Address" onChange ={this.onCardNumberChange.bind(this) }/></p>
                            <p><span>{intl.get('City')}:</span>  <input type="text" name="City" onChange ={this.onCardNumberChange.bind(this) }/></p>
                            <p><span>{intl.get('Province')}:</span>  <input type="text" name="Province" onChange ={this.onCardNumberChange.bind(this) }/></p>
                            <p><span>{intl.get('Zip')}:</span>  <input type="text" name="Zip" onChange ={this.onCardNumberChange.bind(this) }/></p>
                            <p><span>{intl.get('Phone')}:</span>  <input type="text" name="Phone" onChange ={this.onCardNumberChange.bind(this) }/></p>
                        </div>
                    </div>
                    <div className="pay-information border-bottom">
                        {intl.get('Payment')}
                        <div className="pay-information-item">
                            <p><span >{intl.get('HolderName')}:</span> <input type="text" name="HolderName" onChange ={this.onCardNumberChange.bind(this) }/></p>
                            <p><span>{intl.get('CardNumber')}:</span>  <input type="text"  name="CardNumber" onChange ={this.onCardNumberChange.bind(this) }/></p>
                            <p><span>{intl.get('CVV')}:</span>  <input type="text" name="CVV" onChange ={this.onCardNumberChange.bind(this) }/></p>
                        </div>
                    </div>
                    <div className="pay-total">
                        <div className="pay-information-item">
                            <p><span>{intl.get('TotalAmount')}:</span> ${this.state.total}</p>
                            <p><span>{intl.get('Shipping')}:</span>  $20.00</p>
                            <p><span>{intl.get('Tax')}:</span>  $20.00</p>
                        </div>

                        <div className="place-order" onClick={() => this.handlePlaceOrder()}>
                        {intl.get('PlaceOrder')}
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}


export default Payment;