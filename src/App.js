import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />

          <Route path="/category:id" component={ItemListContainer} />

          <Route path="/item/:id" component={ItemDetailContainer} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
