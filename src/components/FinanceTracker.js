import React from 'react'
import FinanceDetails from './FinanceDetails'
import FinanceHistory from './FinanceHistory'
import FinanceAdd from './FinanceAdd'
import '../styles/styles.css'

class FinanceTracker extends React.Component{
    state = {
        finances:[
            {id: Math.random(), title:'shopping', money:100, type:'expenses'},
            {id: Math.random(), title:'pay', money: 5000, type:'incomes'},
            {id: Math.random(), title:'loterry win', money: 50, type:'incomes'},
            {id: Math.random(), title:'lost', money:100, type:'expenses'},
            {id: Math.random(), title:'scholarship', money:700, type:'incomes'}
        ],
        titleInput: '',
        moneyInput: '',
        typeInput: '' ,
    }
    sumBalance(){
        const {finances} = this.state
        let balance = 0
        let incomes = 0
        let expenses = 0
        finances.forEach(element =>{
            if(element.type === 'expenses'){
                expenses += element.money
            }else{
                incomes += element.money
            }
        })
        balance = incomes - expenses
        return balance;
    }
    sumIncomes(){
        const {finances} = this.state
        let incomes = 0
        finances.forEach(element =>{
            if(element.type === 'incomes'){
                incomes += element.money
            }
        })
        return incomes;
    }
    sumExpenses(){
        const {finances} = this.state
        let expenses = 0
        finances.forEach(element =>{
            if(element.type === 'expenses'){
                expenses += element.money
            }
        })
        return expenses
    }
    deleteFinance(id){
        const {finances} = this.state
        const deleteFinance = finances.filter(element => element.id !== id)
        this.setState({finances: deleteFinance})
    }

    onChangeTitleInput(e){
        this.setState({titleInput: e.target.value})
    }
    onChangeMoneyInput(e){
        this.setState({moneyInput: e.target.value})
    }
    onChangeTypeInput(e){
        this.setState({typeInput: e.target.value})
    }
    addFinance(){
        const warning = document.querySelector(".warning");
        const {titleInput, moneyInput, typeInput} = this.state
        if(titleInput.length>0 && moneyInput !== '' && typeInput !== ''){
            const newElement = {
                id: Math.random(),
                title: titleInput,
                money: parseFloat(moneyInput),
                type: typeInput
            }
            const newFinance = [...this.state.finances, newElement]
            this.setState({finances: newFinance, titleInput: '', moneyInput: '', typeInput: ''})
            warning.style.display = "none";
        }else{
            warning.style.display = "block";
            warning.animate([{transform: 'scale(0)'},
            {transform: 'scale(1)'}],
            {duration: 300})
        }
    }
    expensesArray(){
        const {finances} = this.state
        const expensesArray = []
        finances.forEach(element =>{
            if(element.type === 'expenses'){
                expensesArray.push(element.money)
            }
        })
        return expensesArray
    }
    expensesTitleArray(){
        const {finances} = this.state
        const expensesTitleArray = []
        finances.forEach(element =>{
            if(element.type === 'expenses'){
                expensesTitleArray.push(element.title)
            }
        })
        return expensesTitleArray
    }
    incomesArray(){
        const {finances} = this.state
        const incomesArray = []
        finances.forEach(element =>{
            if(element.type === 'incomes'){
                incomesArray.push(element.money)
            }
        })
        return incomesArray
    }
    incomesTitleArray(){
        const {finances} = this.state
        const incomesTitleArray = []
        finances.forEach(element =>{
            if(element.type === 'incomes'){
                incomesTitleArray.push(element.title)
            }
        })
        return incomesTitleArray
    }
    render(){
        const balanceAmount = this.sumBalance()
        const incomeAmount = this.sumIncomes()
        const expensesAmount = this.sumExpenses()
        const expensesMoney = this.expensesArray()
        const incomesMoney = this.incomesArray()
        const expensesTitle = this.expensesTitleArray()
        const incomesTitle = this.incomesTitleArray()
        const {titleInput, moneyInput, typeInput} = this.state
        const history = this.state.finances.map(history =>{
            return <FinanceHistory historyElements={history} deleteFinance={this.deleteFinance.bind(this)} key={history.id}/>
        })
        return(
            <div className="app-container">
                <FinanceDetails 
                balanceAmount={balanceAmount}
                incomeAmount={incomeAmount}
                expensesAmount={expensesAmount}
                expensesMoney={expensesMoney}
                incomesMoney={incomesMoney}
                expensesTitle={expensesTitle}
                incomesTitle={incomesTitle} />
                <div className="manage-container">
                    <table className="history-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Amount</th>
                                <th>Type</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {history}
                        </tbody>                       
                    </table>
                    <FinanceAdd titleInput={titleInput} moneyInput={moneyInput} typeInput={typeInput}
                    onChangeMoneyInput={this.onChangeMoneyInput.bind(this)}
                    onChangeTitleInput={this.onChangeTitleInput.bind(this)}
                    onChangeTypeInput={this.onChangeTypeInput.bind(this)} 
                    addNewFinance={this.addFinance.bind(this)} />
                </div>
            </div>
        )
    }
}

export default FinanceTracker;