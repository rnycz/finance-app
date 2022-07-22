import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'

const FinanceHistory = props => {
    const {historyElements, deleteFinance} = props
    const deleteHandler = () => deleteFinance(historyElements.id)
    return(
        <tr className={`${historyElements.type === 'expenses' ? 'expenses-tr' : 'incomes-tr'}`}>
            <td>{historyElements.title}</td>
            <td>{historyElements.money}</td>
            <td>{historyElements.type}</td>
            <td><FontAwesomeIcon icon={faTrash } onClick={deleteHandler} /></td>
        </tr>
    )
}

export default FinanceHistory