import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUP from "./pages/sign-up-and-sign-in-page/sign-up-and-sign-in-page.component";
import {
  // addCollectionAndDocuments,
  auth,
  createUserAccount,
} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import React from "react";
import setCurrentUser from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selector";
import CheckOutPage from "./pages/checkoutpage/checkoutpage.component";
import { createStructuredSelector } from "reselect";
// import { selectCollectionsForPreview } from "./redux/shop/shop.selector";

class App extends React.Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    const {
      setCurrentUser,
      // collections
    } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserAccount(userAuth);
        const snapshot = await userRef.get();
        const userData = snapshot.data();
        setCurrentUser({
          id: userRef.id,
          ...userData,
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    // addCollectionAndDocuments(
    //   "collections",
    //   collections.map(({ title, items }) => ({ title, items }))
    // );
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUP />
            }
          />
          <Route exact path="/checkout" component={CheckOutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collections: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
