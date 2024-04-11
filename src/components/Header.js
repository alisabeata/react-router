import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

export const Header = () => {
  return (
    <nav className={classes.header}>
      <ul>
        <li>
          {/* <Link to="/welcome">Welcome</Link> */}
          {/* or */}
          {/* <NavLink ...> passes the styles to the active element */}
          <NavLink activeClassName={classes.active} to="/welcome">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/quotes">
            Quotes
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
