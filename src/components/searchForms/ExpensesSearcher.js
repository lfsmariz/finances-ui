const ExpensesSearcher = () => {

  return(
    <div className="container my-4 ">
      <div className="row my-3 my-2 align-items-start justify-content-between">
        <div className="mb-3 col-3">
          <label for="bank" className="form-label">Nome da Despesa:</label>
          <input type="text" className="form-control" id="created-expense" placeholder="item 1"/>
        </div>
        <div className="mb-3 col-2">
          <label for="bank" className="form-label">Data de Criação:</label>
          <select className="form-select mb-1" id="unit">
            <option selected>Selecione a forma</option>
            <option value="1">Maior</option>
            <option value="2">Menor</option>
            <option value="3">Igual</option>
          </select>
          <input type="date" className="form-control" id="created-expense" placeholder="100.00"/>
        </div>
        <div className="mb-3 col-2">
          <label for="bank" className="form-label">Data de Pagamento:</label>
          <select className="form-select mb-1" id="unit">
            <option selected>Selecione a forma</option>
            <option value="1">Maior</option>
            <option value="2">Menor</option>
            <option value="3">Igual</option>
          </select>
          <input type="date" className="form-control" id="created-expense" placeholder="20"/>
        </div>

        <div className="mb-3 my-2 col-3">
          <label for="unit" className="form-label">Tipo de Despesa</label>
          <select className="form-select" id="unit">
            <option selected>Selecione a unidade</option>
            <option value="1">unidade</option>
            <option value="2">kilograma</option>
            <option value="3">grama</option>
            <option value="4">litro</option>
          </select>
        </div>
      </div>
      <div className="row my-3 my-2 align-items-start justify-content-between">
        <button className="mt-4 btn btn-success">
            Buscar
        </button> 
      </div>
      
    </div>
  )

}

export default ExpensesSearcher;