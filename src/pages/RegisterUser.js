import { Link } from "react-router-dom";

const RegisterUser = () => {

  return (
    <div>
      <div className="container my-5">
          <h1>Cadastrar Usuário</h1>
      </div>

      <div className="container my-5 border border-dark">
        <div class="mb-3 my-2">
          <label for="username" className="form-label">Nome do Usuário</label>
          <input type="email" className="form-control" id="username" placeholder="nome"/>
        </div>
        <div className="row my-5 mx-auto w-75" >
            <Link to="/" className="btn btn-success col mx-4">
              Cadastrar Usuário
            </Link>
        </div>
      </div>
      <div className="row my-5 mx-5">
            <Link to="/" className="btn btn-primary col mx-4">
              Voltar para home
            </Link>
      </div>
    </div>
  )
}

export default RegisterUser;