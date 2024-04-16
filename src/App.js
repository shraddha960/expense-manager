import './App.css';
import Clock from './components/Clock';
// import ExpenseEntryItem from './components/ExpenseEntryItem';
import ExpenseEntryItemList from './components/ExpenseEntryItemList';
import MessageWithEvent from './components/MessageWithEvent';
// import FormattedDate from './components/FormattedDate';
// import FormattedMoney from './components/FormattedMoney';
import Welcome from './components/Welcome';
import FunctionClock from './components/FunctionClock';

function App() {

  const items = [
    { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
    { id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
    { id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
    { id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
    { id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
    { id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
    { id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
    { id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
    { id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" }
   
 ]

  return (
    <>
      <h1>Expense Manager App</h1>
      {/* <ExpenseEntryItem item={item}/> */}
      <ExpenseEntryItemList items={items}/>
      {/* <FormattedMoney amount={10.5} />
      <FormattedDate value={'03-20-2023'} /> */}
      <Welcome name="Shraddha"/>
      <MessageWithEvent name="React" />
      <MessageWithEvent name="React developer" />
      <Clock/>
      <FunctionClock/>
    </>
  );
}

export default App;
