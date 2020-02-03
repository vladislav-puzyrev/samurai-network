import React from 'react';
import styles from './Dialog.module.css';
import {NavLink} from "react-router-dom";

function Dialog(props) {
	return (
		<li className={styles.dialog}>
			<NavLink to={`/messages/${String(props.id)}`}>{props.name}</NavLink>
		</li>
	);
}

export default Dialog;