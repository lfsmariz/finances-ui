import CustomHeader from "../components/CustomHeader";
import ListExpensesHistory from "../components/listHistory/ListExpensesHistory";
import ExpensesSearcher from "../components/searchForms/ExpensesSearcher";

const ExpensesHistory = () => {

  return(
    <div>
      <CustomHeader>
        Histórico de Despesas
      </CustomHeader>
      <ExpensesSearcher />
      <ListExpensesHistory />
    </div>

  );
}

export default ExpensesHistory;