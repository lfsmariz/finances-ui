import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div>
      <div className="container">
        <div className="container my-5">
            <h1>Finanças TATU</h1>
        </div>
        <div className="row fixed-bottom my-5 mx-5">
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
    </div>
  )

}

export default Home;