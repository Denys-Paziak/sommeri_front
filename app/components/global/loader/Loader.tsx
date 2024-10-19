import styles from './loader.module.css';

import React from 'react';

const MyComponent = () => {
    return (
        <div className={styles.loaderWrapper}>
            <div className={styles.loader}></div>
        </div>
    );
};

export default MyComponent;
