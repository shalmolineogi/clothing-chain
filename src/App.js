import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUP from "./pages/sign-up-and-sign-in-page/sign-up-and-sign-in-page.component";
import { auth, createUserAccount } from "./firebase/firebase.utils";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: "",
    };
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserAccount(userAuth);
        const snapshot = await userRef.get();
        const userData = snapshot.data();
        this.setState(
          {
            currentUser: {
              id: userRef.id,
              ...userData,
            },
          },
          () => console.log(this.state)
        );
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={SignInAndSignUP} />
        </Switch>
      </div>
    );
  }
}

export default App;
