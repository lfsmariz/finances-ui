const FormExpense = () => {

  return(
    <div className="container my-4 border-bottom border-dark">
      <div className="my-3 my-2">
        <label for="expense-type" className="form-label">Tipo de Despesa:</label>
        <select className="form-select" id="expense-type">
          <option selected>Selecione o tipo de despesa</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="row">
        <div className="mb-3 col">
          <label for="bank" className="form-label">Data de Criação:</label>
          <input type="date" className="form-control" id="created-expense"/>
        </div>
        <div className="mb-3 col">
          <label for="bank" className="form-label">Data de Pagamento:</label>
          <input type="date" className="form-control" id="payment-expense"/>
        </div>
      </div>
    </div>
  )

}

export default FormExpense;