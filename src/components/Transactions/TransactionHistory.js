import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr>
          <th className={s.type}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.body}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={s.tr}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
