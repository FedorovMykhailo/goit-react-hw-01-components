import css from "./TransactionHistory.module.css";

const TransactionHistory = ( {items} ) => (
    <table className={css.transactionHistory}>
  <thead>
    <tr className= {css.tableHead}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id,type,amount,currency})=>(
    <tr key={id} className={css.tableRow}>
        <td className={css.tableCell}>{type}</td>
        <td className={css.tableCell}>{amount}</td>
        <td className={css.tableCell}>{currency}</td>
    </tr>))}
    
        </tbody>  
    </table>    
)

export default TransactionHistory
