import css from "./Statistics.module.css";

const Statistics = ({title, data }) => (
<section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

  <ul className={css.statlist}>
            {data.map(stat => (<li key={stat.id} className={css.item}
                style={{backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)}}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}</span>
    </li>))}
  </ul>
</section>
)
export default Statistics