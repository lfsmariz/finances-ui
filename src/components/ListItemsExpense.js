const ListItemsExpense = () => {
  return(
    <div className="container my-4">
      <table class="table table-secondary table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Valor</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Unidade</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>item1</td>
            <td>10.00</td>
            <td>5</td>
            <td>kilograma</td>
            <td>50</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>item2</td>
            <td>10.00</td>
            <td>5</td>
            <td>kilograma</td>
            <td>50</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>item3</td>
            <td>10.00</td>
            <td>5</td>
            <td>kilograma</td>
            <td>50</td>
          </tr>      
        </tbody>
      </table>
    </div>
  )
}

export default ListItemsExpense;