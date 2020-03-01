import React from 'react'
import styles from './Users.module.css'
import PaginationItem from './PaginationItem/PaginationItem'
import User from './User/User'
import Preloader from '../../common/Preloader/Preloader'

function Users (props) {
  // const pagesQuantity = Math.ceil(props.totalUsersCount / props.pageSize);
  const paginationItems = []

  for (let i = +props.currentPage; i < +props.currentPage + 5; i++) {
    if (i < +props.totalUsersCount) {
      paginationItems.push(
        <PaginationItem key={i} number={i} active={props.currentPage === +i}/>,
      )
    }
  }

  function onClickHandler (event) {
    props.onPageChanged(event.target.textContent)
    props.setCurrentPage(event.target.textContent)
  }

  return (
    <>
      <h1 className={styles.title}>Пользователи</h1>
      <ul className={styles.pagination} onClick={onClickHandler}>
        {paginationItems}
      </ul>

      {props.isFetching && <Preloader/>}
      <ul className={styles.users}>
        {
          props.users.map((user) => (
            <User {...props} key={user.id} user={user}/>
          ))
        }
      </ul>
    </>
  )
}

export default Users