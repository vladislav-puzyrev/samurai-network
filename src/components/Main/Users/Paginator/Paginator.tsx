import React, { useState } from 'react'
import styles from './Paginator.module.css'
import PaginationItem from './PaginationItem/PaginationItem'

type PropTypes = {
  currentPage: number
  totalUsersCount: number
  pageSize: number
  onPageChanged: (page: number) => void
  portionSize: number
}

const Paginator: React.FC<PropTypes> = ({ currentPage, totalUsersCount, pageSize, onPageChanged, portionSize }) => {
  const pageCount = Math.ceil(totalUsersCount / pageSize)
  const pages = []

  for (let i = 1; i < totalUsersCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pageCount / portionSize)
  const lastElemPageNumber = pageCount / portionSize * portionSize
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  const changePage = (event: any) => {
    const pageNumber = +event.target.dataset.number

    if (pageNumber) {
      onPageChanged(pageNumber)
    }
  }

  return (
    <div onClick={changePage} className={styles.paginationItems}>
      {
        totalUsersCount > 0 &&
        <button disabled={portionNumber === 1} className={styles.button} onClick={() => {setPortionNumber(portionNumber - 1)}}>Влево</button>
      }
      {
        pages.filter((num) => (num >= leftPortionPageNumber && num <= rightPortionPageNumber && num <= lastElemPageNumber))
          .map((num) => (
            <PaginationItem key={num} number={num} active={+currentPage === num}/>
          ))
      }
      {
        totalUsersCount > 0 &&
        <button disabled={portionCount === portionNumber} className={styles.button} onClick={() => {setPortionNumber(portionNumber + 1)}}>Вправо</button>
      }
    </div>
  )
}

export default Paginator
