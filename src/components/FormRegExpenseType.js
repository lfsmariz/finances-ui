import { Link } from "react-router-dom"

const FormRegExpenseType = () => {

  return (
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
          <label for="name" className="form-label">Nome da despesa:</label>
          <input type="email" className="form-control" id="name" placeholder="Despesa tipo 1"/>
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">Descrição:</label>
          <input type="email" className="form-control" id="description" placeholder="despesa associada à atividade 1"/>
        </div>
        <div className="row my-5 mx-5">
          <Link to="/" className="btn btn-success col mx-4">
            Registrar Tipo de Despesa
          </Link>
        </div>
        
      </div>
  )
}

export default FormRegExpenseType;