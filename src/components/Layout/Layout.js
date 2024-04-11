import classes from './Layout.module.css'
import { Navigation } from './Navigation'

export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className={classes.main}>{children}</main>
    </>
  )
}
