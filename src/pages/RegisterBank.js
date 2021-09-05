import { Link } from "react-router-dom";
import CustomHeader from "../components/CustomHeader";

const RegisterBank = () => {

  return (
    <div>
      <CustomHeader>Cadastrar Banco</CustomHeader>
      <div className="container my-5 border border-dark">
        <div className="mb-3 my-2">
          <label for="username" className="form-label">Usuário:</label>
          <select className="form-select" id="username">
            <option selected>Selecione o usuário</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        
        <div className="mb-3">
          <label for="bank" className="form-label">Banco:</label>
          <input type="email" className="form-control" id="bank" placeholder="bradesco"/>
        </div>
        <div className="mb-3">
          <label for="account-number" className="form-label">Número da conta:</label>
          <input type="email" className="form-control" id="account-number" placeholder="12345-45"/>
        </div>
        <div className="mb-3">
          <label for="balance" className="form-label">Saldo:</label>
          <input type="email" className="form-control" id="balance" placeholder="1000.00"/>
        </div>
        <div className="mb-3">
          <label for="account-name" className="form-label">Nome da Conta:</label>
          <input type="email" className="form-control" id="account-name" placeholder="conta 1"/>
        </div>
        <div className="row my-5 mx-5">
          <Link to="/" className="btn btn-success col mx-4">
            Cadastrar Banco
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default RegisterBank;