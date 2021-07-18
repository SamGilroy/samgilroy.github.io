import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home/Index';
import Contact from './components/contact/Index';
import Categories from './components/categories/Index';
import Detail from './components/categories/Detail';
import CartIndex from './components/cart/Index';
import Payment from './components/pay/Index';


const Router = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/categories" component={Categories}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/detail" component={Detail}/>
            <Route exact path="/cart" component={CartIndex}/>
            <Route exact path="/pay" component={Payment}/>

        </Switch>
    </HashRouter>
);


export default Router;