import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Ad from './components/Ad/Ad';
import Ballon from './components/Ballon/Ballon';
import Reviews from './components/Reviews/Reviews';
import AddBallons from './containers/Admin/AddBallons/AddBallons';
import AdminList from './containers/Admin/AdminList/AdminList';
import EditBallons from './containers/Admin/BallonsEdit/EditBallons';
import BallonList from './containers/Admin/BallonsList/BallonList';
import Home from './containers/Home/Home';
import ContextBallonProvider from './contexts/ContextBallon';
import PaymentForm from "./components/Card/Card";
import Checkout from './containers/OrderForm/CheckOut';

const Routes = () => {
    return (
        <ContextBallonProvider>  
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/add" component={AddBallons} />
                        <Route exact path="/ballons" component={BallonList} />
                        <Route exact path="/ballon" component={Ballon} />
                        <Route exact path="/edit/:id" component={EditBallons} />
                        <Route exact path="/reviews" component={Reviews} />
                        <Route exact path="/ad" component={Ad} />
                        <Route exact path="/admin-list" component={AdminList} />
                        <Route exact path='/payment' component={PaymentForm} />
                        <Route exact path='/order' component={Checkout} />
                    </Switch>
                </BrowserRouter>
            
        </ContextBallonProvider>
    );
};

export default Routes;