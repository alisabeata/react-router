import QuoteList from '../components/Quotes/QuoteList'
import { Layout } from '../components/Layout/Layout'

export const MOCK_QUOTES = [
  {
    id: 1,
    text: 'Mirror, mirror, on the wall, who is the fairest of them all?',
    author: 'The Evil Queen (Snow White)',
  },
  {
    id: 2,
    text: 'All the world is made of faith, and trust, and pixie dust.',
    author: 'J.M. Barrie (Peter Pan)',
  },
  {
    id: 3,
    text: 'Even miracles take a little time.',
    author: 'The Fairy Godmother (Cinderella)',
  },
  {
    id: 4,
    text: 'No matter how your heart is grieving, if you keep on believing, the dream that you wish will come true.',
    author: 'Cinderella',
  },
  {
    id: 5,
    text: 'In the land of imagination, every story is a journey waiting to be told.',
    author: 'Red Quine',
  },
]

export const AllQuotes = () => {
  return (
    <Layout>
      <QuoteList quotes={MOCK_QUOTES} />
    </Layout>
  )
}
