import FormRegExpenseType from "../components/FormRegExpenseType";
import ListExpenseType from "../components/ListExpenseType";
import CustomHeader from "../components/CustomHeader";

const RegisterExpenseType = () => {

  return (
    <div>
      <CustomHeader>Cadastrar Tipo de Despesa</CustomHeader>
      <FormRegExpenseType />
      <ListExpenseType />
    </div>
  )

}

export default RegisterExpenseType;