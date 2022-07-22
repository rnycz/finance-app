import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const FinanceDetails = props =>{
    const {balanceAmount, incomeAmount, expensesAmount, expensesMoney, expensesTitle, incomesMoney, incomesTitle} = props;
    const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    const dataExpenses = {
        labels: expensesTitle,
        datasets: [
          {
            label: 'Expenses',
            data: expensesMoney,
            backgroundColor: colorArray,
            borderColor: '#FFFFFF',
            hoverBorderColor: '#000000',
            borderWidth: 2,
          },
        ],
      };
      const dataIncomes = {
        labels: incomesTitle,
        datasets: [
          {
            label: 'Incomes',
            data: incomesMoney,
            backgroundColor: colorArray,
            borderColor: '#FFFFFF',
            hoverBorderColor: '#000000',
            borderWidth: 2,
          },
        ],
      };
    return(
        <div className="budget-container">
            <div className="balance">
                <h1>Budget Tracker</h1>
                <div className="details-text">
                    <h2>Balance</h2>
                    <p>${balanceAmount}</p>
                </div>
            </div>
            <div className="details-container">
                <div className="income">
                    <div className="details-text">
                        Your incomes: {incomeAmount}
                    </div>
                    <Doughnut data={dataIncomes} />
                </div>
                <div className="expenses">
                    <div className="details-text">
                        Your expenses: {expensesAmount} 
                    </div>
                    <Doughnut data={dataExpenses} />
                </div>
            </div>
        </div>     
    )
}
export default FinanceDetails