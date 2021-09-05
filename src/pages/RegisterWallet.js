import { Link } from "react-router-dom";
import CustomHeader from "../components/CustomHeader";

const RegisterWallet = () => {

  return (
    <div className="container my-5 align-items-center">
      <CustomHeader>Registrar Carteira</CustomHeader>

      <div className="container my-5 align-items-center border border-dark">
        <div className="mb-3 my-2">
          <label for="wallet-name" className="form-label">Nome da Carteira:</label>
          <input type="email" className="form-control" id="wallet-name" placeholder="Reserva"/>
        </div>
        <div className="my-4">
          <h3>Selecione os bancos:</h3>
        </div>
        <div className="mb-3">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" value="" id="opt1"/>
            <label className="form-check-label" for="opt1">
              Option 1
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" value="" id="opt2"/>
            <label className="form-check-label" for="opt2">
              Option 2
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" value="" id="opt3"/>
            <label className="form-check-label" for="opt3">
              Option 3
            </label>
          </div>          
        </div>
        <div className="row my-5 mx-auto w-75" >
            <Link to="/" className="btn btn-success col mx-4">
              Cadastrar Carteira
            </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterWallet;