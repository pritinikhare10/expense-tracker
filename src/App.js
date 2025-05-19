import { AddTransaction } from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
// Inside app/layout.tsx or app/layout.js
import './App.css';
import { GlobalProvider } from "./context/GlobalState";

function App() {
  
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
