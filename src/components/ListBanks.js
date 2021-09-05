const ListBanks = () => {
  return(
    <div className="container my-4">
      <table class="table table-secondary table-striped center-text">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Usuário</th>
            <th scope="col">Nome</th>
            <th scope="col">Banco</th>
            <th scope="col">Num. Conta</th>
            <th scope="col">Saldo</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>username</td>
            <td>cofrinho</td>
            <td>banco banco</td>
            <td>12354-8</td>
            <td>10000,00</td>
            <td>
              <div className="row">
                <button className="col btn btn-danger mx-5">
                Deletar
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>username</td>
            <td>cofrinho</td>
            <td>banco banco</td>
            <td>12354-8</td>
            <td>10000,00</td>
            <td>
              <div className="row">
                <button className="col btn btn-danger mx-5">
                Deletar
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>username</td>
            <td>cofrinho</td>
            <td>banco banco</td>
            <td>12354-8</td>
            <td>10000,00</td>
            <td>
              <div className="row">
                <button className="col btn btn-danger mx-5">
                Deletar
                </button>
              </div>
            </td>
          </tr>      
        </tbody>
      </table>
    </div>
  )
}

export default ListBanks;