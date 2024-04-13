import { useParams, useRouteMatch, Route, Link } from 'react-router-dom'
import Comments from '../components/Comments/Comments'
import { Layout } from '../components/Layout/Layout'
import HighlightedQuote from '../components/Quotes/HighlightedQuote'
import { MOCK_QUOTES } from './AllQuotes'

export const QuoteDetail = () => {
  const match = useRouteMatch()
  const params = useParams()
  const quote = MOCK_QUOTES.find((quote) => String(quote.id) === params.quoteId)

  if (!quote) {
    return <p>No quote found</p>
  }

  return (
    <Layout>
      <blockquote>
        <h1>Quote Detail</h1>
        <HighlightedQuote text={quote.text} author={quote.author} />

        <Route path={`/quotes/${params.quoteId}`} exact>
          <Link className="green" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </Route>

        {/*<Route path={`/quotes/:quoteId/comments`}></Route>*/}

        {/* or */}
        {/* <Route path={`/quotes/${params.quoteId}/comments`}>
          <Comments />
        </Route>*/}

        {/* or */}
        {/* ${match.path} allows not to rewrite the directory */}
        {/* detects the current one */}
        {/* feature for nested routes */}
        <Route path={`${match.path}/comments`}>
          <Comments />
        </Route>

      </blockquote>
    </Layout>
  )
}
