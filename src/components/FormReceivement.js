const FormReceivement = () => {
  return(
    <div className="container my-4 border-bottom border-dark">
      <div className="row">
        <div className="mb-3 col">
          <label for="bank" className="form-label">Nome:</label>
          <input type="text" className="form-control" id="created-expense"/>
        </div>
        <div className="mb-3 col">
          <label for="bank" className="form-label">Valor:</label>
          <input type="number" className="form-control" id="payment-expense"/>
        </div>
        
      </div>
      <div className="row">
        <div className="mb-3 col">
          <label for="bank" className="form-label">Descrição:</label>
          <input type="text" className="form-control" id="payment-expense"/>
        </div>
        <div className="mb-3 col">
          <label for="bank" className="form-label">Data de Recebimento</label>
          <input type="date" className="form-control" id="payment-expense"/>
        </div>
      </div>
    </div>
  )
}

export default FormReceivement;