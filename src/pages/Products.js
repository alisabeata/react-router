import { Link } from 'react-router-dom'

export const Products = () => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to={'/products/book'}>Book</Link>
        </li>
        <li>
          <Link to={'/products/course'}>Course</Link>
        </li>
        <li>
          <Link to={'/products/lamp'}>Lamp</Link>
        </li>
      </ul>
    </section>
  )
}
