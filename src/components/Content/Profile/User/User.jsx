import React from 'react';
import styles from './User.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import Status from "./Status/StatusHooks";

function User(props) {
	if (!props.profile) {
		return <Preloader/>;
	}

	return (
		<div className={styles.user}>
			<img className={styles.avatar} src={props.profile.photos.large} alt="avatar"/>
			<div className={styles.info}>
				<h1 className={styles.name}>
					{props.profile && props.profile.fullName}
				</h1>
				<Status status={props.status} updateStatus={props.updateStatus}/>
				<ul className={styles.about}>
					<li>Date of Birth: 2 january</li>
					<li>City: Minsk</li>
					<li>Education: BSU'11</li>
					<li>Web Site: null</li>
				</ul>
			</div>
		</div>
	);
}

export default User;