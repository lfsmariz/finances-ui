const ListExpensesHistory = () => {
  return (
    <div className="container my-4">
      <table class="table table-secondary table-striped center-text">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Usuário</th>
            <th scope="col">Tipo de Despesa</th>
            <th scope="col">Nome</th>
            <th scope="col">Criação</th>
            <th scope="col">Pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>username</td>
            <td>alimentação</td>
            <td>feira dia 1</td>
            <td>10/10/2020</td>
            <td>10/10/2020</td>
            <td>10000,00</td>
            <td>
              <div className="row">
                <button className="col btn btn-success mx-3">
                Pagar
                </button>
                <button className="col btn btn-danger mx-3">
                Apagar
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>username</td>
            <td>alimentação</td>
            <td>feira dia 1</td>
            <td>10/10/2020</td>
            <td>10/10/2020</td>
            <td>10000,00</td>
            <td>
              <div className="row">
                <button className="col btn btn-success mx-3">
                  Pagar
                </button>
                <button className="col btn btn-danger mx-3">
                  Apagar
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>username</td>
            <td>alimentação</td>
            <td>feira dia 1</td>
            <td>10/10/2020</td>
            <td>10/10/2020</td>
            <td>10000,00</td>
            <td>
              <div className="row">
                <button className="col btn btn-success mx-3">
                Pagar
                </button>
                <button className="col btn btn-danger mx-3">
                Apagar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ListExpensesHistory;