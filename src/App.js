import { Route, Switch, Redirect } from 'react-router-dom'
import { Header } from './components/Header'
import { Welcome } from './pages/Welcome'
import { Products } from './pages/Products'
import { ProductDetail } from './pages/ProductDetail'

// React uses the react-router-dom package

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          {/* productId is dynamic id can be any name */}
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
