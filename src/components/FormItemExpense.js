const FormItemExpense = () => {

  return(
    <div className="container my-4 border-bottom border-dark ">
      <div className="row my-3 my-2 align-items-end justify-content-center">
        <div className="mb-3 col-3">
          <label for="bank" className="form-label">Nome do Item:</label>
          <input type="text" className="form-control" id="created-expense" placeholder="item 1"/>
        </div>
        <div className="mb-3 col-2">
          <label for="bank" className="form-label">Valor Total:</label>
          <input type="number" className="form-control" id="created-expense" placeholder="100.00"/>
        </div>
        <div className="mb-3 col-2">
          <label for="bank" className="form-label">Quantidade:</label>
          <input type="number" className="form-control" id="created-expense" placeholder="20"/>
        </div>

        <div className="mb-3 my-2 col-3">
          <label for="unit" className="form-label">unidade:</label>
          <select className="form-select" id="unit">
            <option selected>Selecione a unidade</option>
            <option value="1">unidade</option>
            <option value="2">kilograma</option>
            <option value="3">grama</option>
            <option value="4">litro</option>
          </select>
        </div>
        
        <button className=" mb-3 btn btn-success col-2">
          Cadastrar Item
        </button>
        
      </div>
    </div>
  )

}

export default FormItemExpense;