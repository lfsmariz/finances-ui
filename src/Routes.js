import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Receivement from "./pages/Receivement"
import RegisterBank from "./pages/RegisterBank"
import RegisterExpense from "./pages/RegisterExpense"
import RegisterExpenseType from "./pages/RegisterExpenseType"
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

      <Route exact path="/register-transfer">
        <Transfer/>
      </Route>

      <Route exact path="/register-expense-type">
        <RegisterExpenseType/>
      </Route>

      <Route exact path="/register-expense">
        <RegisterExpense/>
      </Route>

      <Route exact path="/register-receivement">
        <Receivement/>
      </Route>

    </Switch>
  </BrowserRouter>
  )
}

export default Routes