const FinanceAdd = props => {
    const {titleInput, moneyInput, typeInput, onChangeTitleInput, onChangeMoneyInput, onChangeTypeInput, addNewFinance} = props
    return(
        <div className="adds-form">
            <label className="input-label" htmlFor="title">TITLE</label>
            <input type="text" id="title" value={titleInput} onChange={onChangeTitleInput} />
        
            <label className="input-label" htmlFor="amount">AMOUNT</label>
            <input type="number" id="amount" value={moneyInput} onChange={onChangeMoneyInput} />

            <label className="input-label" htmlFor="select">TYPE</label>
            <select id="select" value={typeInput} onChange={onChangeTypeInput} >
                <option value="" defaultValue={''} disabled hidden>Choose Type</option>
                <option value="incomes">Incomes</option>
                <option value="expenses">Expenses</option>
            </select>
            <div className="button-container">
                <button onClick={addNewFinance} className="add-button">Add</button>
            </div>
            <div className="warning">Enter all values ​​to save</div>
        </div>
    )
}

export default FinanceAdd