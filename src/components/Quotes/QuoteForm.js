import { useRef, useState } from 'react'
import { Prompt } from 'react-router-dom'
import Card from '../Utils/Card'
import LoadingSpinner from '../Utils/LoadingSpinner'
import classes from './QuoteForm.module.css'

const QuoteForm = ({ onAddQuote, isLoading }) => {
  const [isEntered, setIsEntered] = useState(false)
  const authorInputRef = useRef()
  const textInputRef = useRef()

  const submitFormHandler = (event) => {
    event.preventDefault()

    const enteredAuthor = authorInputRef.current.value
    const enteredText = textInputRef.current.value

    // optional: Could validate here
    onAddQuote({ author: enteredAuthor, text: enteredText })
  }

  const stopTrackingEntered = () => {
    setIsEntered(false)
  }

  const formFocusHandler = () => {
    setIsEntered(true)
  }

  return (
    <Card>
      <Prompt
        when={isEntered}
        message={(location) =>
          'Are you sure you want to leave the page? All your entered data will be lost'
        }
      />
      <form
        className={classes.form}
        onSubmit={submitFormHandler}
        onFocus={formFocusHandler}
      >
        {isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn" onClick={stopTrackingEntered}>
            Add Quote
          </button>
        </div>
      </form>
    </Card>
  )
}

export default QuoteForm
