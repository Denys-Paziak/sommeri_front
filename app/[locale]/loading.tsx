import React from 'react'
import styles from '../components/global/loader/loader.module.css';

export default function Loading() {
    return (
        <div className={styles.loaderWrapper}>
            <div className={styles.loader}></div>
        </div>
    )
}




