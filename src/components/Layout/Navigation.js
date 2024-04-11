import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.css'

export const Navigation = () => {
  return (
    <header className={classes.header}>
      <p className={classes.logo}>Quotes:</p>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Add a quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
