import { Link } from "react-router-dom"
import CustomHeader from "../components/CustomHeader"
import FormExpense from "../components/FormExpense"
import FormReceivement from "../components/FormReceivement"

const Receivement = () => {

  return (
    <div>
      <CustomHeader>Registrar Recebimento</CustomHeader>
      <div className="container my-2 border border-dark">
        <FormReceivement />
        <div className="row my-5 mx-5">
          <Link to="/" className="btn btn-success col mx-4">
            Cadastrar Recebimento
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Receivement;
