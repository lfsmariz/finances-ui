import { Link } from "react-router-dom";
import CustomHeader from "../components/CustomHeader";

const Transfer = () => {

  return (
    <div>
      <CustomHeader>Transferência</CustomHeader>
      <div className="container my-5 border border-dark">
        <div className="mb-3 my-2">
          <label for="sender" className="form-label">Banco de Origem</label>
          <select className="form-select" id="sender">
            <option selected>Selecione o banco de origem</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="mb-3 my-2">
          <label for="receiver" className="form-label">Banco de Destino</label>
          <select className="form-select" id="receiver">
            <option selected>Selecione o banco de destino</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        
        <div className="mb-3">
          <label for="bank" className="form-label">Valor</label>
          <input type="text" className="form-control" id="bank" placeholder="bradesco"/>
        </div>
        <div className="row my-5 mx-5">
          <Link to="/" className="btn btn-success col mx-4">
            Transferir
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Transfer;