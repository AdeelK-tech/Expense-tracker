import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'


function App() {
  const items = [
    {
      title: 'tution fees',
      price: '5000Rupee',
      date: new Date(2015,8,8),
    },
    {
      title: 'university',
      price: '3000Rupee',
      date: new Date(2021,5,9),
    },
    {
      title: 'daily spending',
      price: '100Rupee',
      date: new Date(2021,7,12),
    },
    {
      title: 'bike maintenance',
      price : '500-1000rupee',
      date:new Date(2021,2,9)
    }
  ]
  const onSaveDataHandler=(expense)=>{
    console.log(expense);
    }

  return (
    <div>
      <NewExpense onSaveData={onSaveDataHandler}/>
      <Expenses item={items}/>
    </div>
  )
}

export default App
