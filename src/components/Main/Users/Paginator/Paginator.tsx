import React, { useEffect } from 'react'
import styles from './Paginator.module.css'
import PaginationItem from './PaginationItem/PaginationItem'

type PropTypes = {
  currentPage: number
  totalUsersCount: number
  pageSize: number
  portionSize: number
  getRequestUsers: (pageSize: number, currentPage: number, term: string) => void
  term: string
  setCurrentPage: (page: number) => void
  portionNumber: number
  setPortionNumber: (number: number) => void
}

const Paginator = React.memo<PropTypes>(
  ({ setCurrentPage, currentPage, totalUsersCount, pageSize, portionSize, getRequestUsers, term, portionNumber, setPortionNumber }) => {

    useEffect(() => {
      getRequestUsers(pageSize, currentPage, term)
    }, [getRequestUsers, pageSize, currentPage, term])

    const onPageChanged = (currentPage: number) => {
      getRequestUsers(pageSize, currentPage, term)
      setCurrentPage(currentPage)
    }

    const pageCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []

    for (let i = 1; i < totalUsersCount; i++) {
      pages.push(i)
    }

    const portionCount = Math.ceil(pageCount / portionSize)
    const lastElemPageNumber = pageCount / portionSize * portionSize
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
          <button disabled={portionNumber === 1} className={styles.button}
                  onClick={() => {setPortionNumber(portionNumber - 1)}}>Влево</button>
        }
        {
          pages.filter(
            (num) => (num >= leftPortionPageNumber && num <= rightPortionPageNumber && num <= lastElemPageNumber))
            .map((num) => (
              <PaginationItem key={num} number={num} active={+currentPage === num}/>
            ))
        }
        {
          totalUsersCount > 0 &&
          <button disabled={portionCount === portionNumber} className={styles.button}
                  onClick={() => {setPortionNumber(portionNumber + 1)}}>Вправо</button>
        }
      </div>
    )
  }
)

export default Paginator
