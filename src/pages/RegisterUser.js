import { Link } from "react-router-dom";
import CustomHeader from "../components/CustomHeader";

const RegisterUser = () => {

  return (
    <div>
      <CustomHeader>Cadastrar Usuário</CustomHeader>

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
    </div>
  )
}

export default RegisterUser;