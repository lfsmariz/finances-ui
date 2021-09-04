import { Link } from "react-router-dom";

const RegisterWallet = () => {

  return (
    <div>
      <div className="container my-5">
          <h1>Cadastrar Carteira</h1>
      </div>

      <div className="container my-5">
        <div className="mb-3">
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
      </div>
      <div className="row fixed-bottom my-5 mx-5">
            <Link to="/" className="btn btn-primary col mx-4">
              Voltar para home
            </Link>
      </div>
    </div>
  )
}

export default RegisterWallet;