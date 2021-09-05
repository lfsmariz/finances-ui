const ListUsers = () => {
  return(
    <div className="container my-4">
      <table class="table table-secondary table-striped center-text">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>username</td>
            <td>
              <div className="row">
                <input type="text" className="col form-control mx-5" id="name" placeholder="Despesa tipo 1"/>
                <button className="col btn btn-danger mx-5">
                Editar Nome
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>username</td>
            <td>
              <div className="row">
                <input type="text" className="col form-control mx-5" id="name" placeholder="Despesa tipo 1"/>
                <button className="col btn btn-danger mx-5">
                Editar Nome
                </button>
              </div> 
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>username</td>
            <td>
              <div className="row">
                <input type="text" className="col form-control mx-5" id="name" placeholder="Despesa tipo 1"/>
                <button className="col btn btn-danger mx-5">
                Editar Nome
                </button>
              </div>
            </td>
          </tr>         
        </tbody>
      </table>
    </div>
  )
}

export default ListUsers;