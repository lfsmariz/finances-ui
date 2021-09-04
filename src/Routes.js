import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import RegisterBank from "./pages/RegisterBank"
import RegisterUser from "./pages/RegisterUser"
import RegisterWallet from "./pages/RegisterWallet"
import Transfer from "./pages/Transfer"

const Routes = () => {

  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>

      <Route exact path="/register-user">
        <RegisterUser/>
      </Route>

      <Route exact path="/register-bank">
        <RegisterBank/>
      </Route>

      <Route exact path="/register-wallet">
        <RegisterWallet/>
      </Route>

      <Route exact path="/transfer">
        <Transfer/>
      </Route>
    </Switch>
  </BrowserRouter>
  )
}

export default Routes