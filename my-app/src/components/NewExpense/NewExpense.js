import ExpenseForm from './ExpenseForm'
import './NewExpense.css'


const NewExpense=(props)=>{
    const onSaveDataHandler=(expense)=>{
        props.onSaveData(expense);
    }
    return <div className="new-expense">
       <ExpenseForm onSaveData={onSaveDataHandler}/>
    </div>
}
export default NewExpense