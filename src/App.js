import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Header } from './components/Header'
import { Welcome } from './pages/Welcome'
import { Products } from './pages/Products'
import { ProductDetail } from './pages/ProductDetail'
import { AllQuotes } from './pages/AllQuotes'
import { QuoteDetail } from './pages/QuoteDetail'
// import { NewQuote } from './pages/NewQuote'
import { NotFound } from './pages/NotFound'
import LoadingSpinner from './components/Utils/LoadingSpinner'

// React uses the react-router-dom package
// v.5

// Lazy Loading is easy to use while using routing
// lazy loading splits the code bundle by chunks
// and load it if necessary
const NewQuote = React.lazy(() => import('./pages/NewQuote'))

function App() {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/welcome" />
            </Route>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/quotes" exact>
              <AllQuotes />
            </Route>
            <Route path="/quotes/:quoteId">
              <QuoteDetail />
            </Route>
            <Route path="/new-quote">
              <NewQuote />
            </Route>
            <Route path="/products" exact>
              <Products />
            </Route>
            {/* productId is dynamic id can be any name */}
            <Route path="/products/:productId">
              <ProductDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </main>
    </div>
  )
}

export default App
