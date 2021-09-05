import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="container">
      <div className="row align-items-start height-define justify-content-between mt-medium">
        <div className="col-4 height-define border-end border-dark">
          <h1>TATU's BANK</h1>
          <p>O banco dos tatu para controle de finanças</p>
        </div>
        <div className="col height-define border-end border-dark">
          <div className="row">
            <h2 className="center-text">Cadastros</h2>
          </div>
          <div className="row mt-5">
            <div className="btn-group-vertical px-4">
              <Link to="register-user" class="btn btn-primary my-2">Usuário</Link>
              <Link to="register-bank" class="btn btn-primary my-2">Banco</Link>
              <Link to="register-wallet" class="btn btn-primary my-2">Carteira</Link>
              <Link to="register-expense-type" class="btn btn-primary my-2">Tipo de Despesa</Link>
            </div>
          </div>
        </div>
        <div className="col height-define border-end border-dark">
          <div className="row">
            <h2 className="center-text">Operações</h2>
          </div>
          <div className="row mt-5 px-4">
            <div className="btn-group-vertical">
              <Link to="register-expense" class="btn btn-primary my-2">Despesa</Link>
              <Link to="register-receivement" class="btn btn-primary my-2">Recebimento</Link>
              <Link to="register-transfer" class="btn btn-primary my-2">Transferência</Link>
            </div>
          </div>
        </div>
        <div className="col height-define border-end border-dark">
          <div className="row">
            <h2 className="center-text">Relatórios</h2>
          </div>
          <div className="row mt-5 px-4">
            <div className="btn-group-vertical">
              <Link to="" class="btn btn-primary my-2">Despesas</Link>
              <Link to="" class="btn btn-primary my-2">Recebimentos</Link>
              <Link to="" class="btn btn-primary my-2">Transferências</Link>
            </div>
          </div>
        </div>
      </div>
    </div>      
  )

}

export default Home;