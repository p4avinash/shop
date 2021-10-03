import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signin-signup/signin-signup-component";

import {Route, Switch} from 'react-router-dom';
import { auth } from "./firebase/firebase.util";

import './App.css';
import React from "react";

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromFirebaseAuth = null

  componentDidMount(){
    this.unsubscribeFromFirebaseAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromFirebaseAuth()
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
