import { Route } from 'react-router-dom'

// There is no limit to define the Route elements
// it can be placed inside of the nested components
// but only if the outer router is matched
// /welcome -> /welcome/user
export const Welcome = () => {
  return (
    <section>
      <h1>Welcome</h1>
      <Route path="/welcome/user">
        <p>new user</p>
      </Route>
    </section>
  )
}
