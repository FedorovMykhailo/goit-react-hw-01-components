import css from "./Statistics.module.css";
import PropTypes from 'prop-types';

const Statistics = ({title, data }) => (
<section className={css.statistics}>
    {title && (<h2 className={css.title}>{title}</h2>)}

  <ul className={css.statlist}>
            {data.map(stat => (<li key={stat.id} className={css.item}
                style={{backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)}}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}</span>
    </li>))}
  </ul>
</section>
)

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.exact({id: PropTypes.string,
    label: PropTypes.string, percentage: PropTypes.number})).isRequired
}
export default Statistics