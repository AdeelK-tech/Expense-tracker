import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
 const Expenses=(props)=> {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.item[0].title}
        price={props.item[0].price}
        date={props.item[0].date}
      />
      <ExpenseItem
        title={props.item[1].title}
        price={props.item[1].price}
        date={props.item[1].date}
      />
      <ExpenseItem
        title={props.item[2].title}
        price={props.item[2].price}
        date={props.item[2].date}
      />
      <ExpenseItem
        title={props.item[3].title}
        price={props.item[3].price}
        date={props.item[3].date}
      />
    </Card>
  )
}
export default Expenses;
