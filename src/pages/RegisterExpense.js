import { Link } from "react-router-dom";
import CustomHeader from "../components/CustomHeader";
import FormExpense from "../components/FormExpense";
import FormItemExpense from "../components/FormItemExpense";
import ListItemsExpense from "../components/ListItemsExpense";

const RegisterExpense = () => {

  return (
    <div>
      <CustomHeader>Registrar Expense</CustomHeader>
      <div className="container my-2 border border-dark">
        <FormExpense />
        <FormItemExpense />
        <ListItemsExpense />
        <div className="row my-5 mx-5">
          <Link to="/" className="btn btn-success col mx-4">
            Cadastrar Despesa
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default RegisterExpense;