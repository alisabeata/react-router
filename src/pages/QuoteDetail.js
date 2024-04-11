import { useParams, Route } from 'react-router-dom'
import Comments from '../components/Comments/Comments'
import { Layout } from '../components/Layout/Layout'
import HighlightedQuote from '../components/Quotes/HighlightedQuote'
import { MOCK_QUOTES } from './AllQuotes'

export const QuoteDetail = () => {
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

        {/*<Route path={`/quotes/${params.quoteId}/comments`}></Route>*/}
        {/* or */}
        <Route path={`/quotes/:quoteId/comments`}>
          <Comments />
        </Route>
      </blockquote>
    </Layout>
  )
}
