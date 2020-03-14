import React, { useState, ChangeEvent } from 'react'
import styles from './Search.module.css'

type PropTypes = {
  setTerm: (term: string) => void
  setCurrentPage: (page: number) => void
  setPortionNumber: (number: number) => void
}

const Search = React.memo<PropTypes>(
  ({ setTerm, setCurrentPage, setPortionNumber }) => {
    const [inputText, setInputText] = useState('')

    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInputText(event.target.value)
    }

    const onButtonClick = () => {
      setCurrentPage(1)
      setTerm(inputText)
      setPortionNumber(1)
    }

    const onReset = () => {
      setCurrentPage(1)
      setTerm('')
      setInputText('')
      setPortionNumber(1)
    }

    const searchButtonStyle = {
      cursor: (inputText) ? 'pointer' : 'not-allowed'
    }

    return (
      <div className={styles.div}>
        <input placeholder="Поиск" type="text" onChange={onTextChange} className={styles.input} value={inputText}/>
        <button
          disabled={!inputText}
          style={searchButtonStyle}
          onClick={onButtonClick}
          className={styles.button}>
          Найти
        </button>
        <button onClick={onReset} className={styles.reset}>Сброс</button>
      </div>
    )
  }
)

export default Search
