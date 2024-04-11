import { useHistory } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import QuoteForm from '../components/Quotes/QuoteForm'

export const NewQuote = () => {
  const history = useHistory()

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData)

    history.push('/quotes')
  }

  return (
    <Layout>
      <section>
        <h1>New Quote</h1>
        <QuoteForm onAddQuote={addQuoteHandler} />
      </section>
    </Layout>
  )
}
