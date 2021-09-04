import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="container">
      <div className="height-define row align-items-center ">
        <div className=" my-3 col-6">
            <h1 className="center-title">TATU's Bank</h1>
        </div>
        <div className=" my-3 col">
          <Link to="register-user" className="btn btn-primary col mx-4">
            Registrar Recebimento
          </Link>
        </div>
        <div className=" my-3 col">
          <Link to="register-user" className="btn btn-primary col mx-4">
            Registrar Despesa
          </Link>
        </div>
        <div className=" my-3 col">
          <Link to="transfer" className="btn btn-primary col mx-4">
            Registrar Tranferência
          </Link>
        </div>
      </div>
      <div className="row my-5 mx-5">
        <Link to="register-user" className="btn btn-primary col mx-4">
          Cadastrar Usuário
        </Link>
        <Link to="register-bank" className="btn btn-primary col mx-4">
          Cadastrar Banco
        </Link>
        <Link to="register-wallet" className="btn btn-primary col mx-4">
          Cadastrar Carteira
        </Link>
      </div>
    </div>      
  )

}

export default Home;