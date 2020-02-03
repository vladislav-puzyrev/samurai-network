import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div>LOGO</div>
				{
					props.isAuth ?
						<div>{props.login} - <button onClick={props.logout}>Выйти</button></div> :
						<NavLink to='/login' className={styles.login}>Login</NavLink>
				}
			</div>
		</header>
	);
}

export default Header;