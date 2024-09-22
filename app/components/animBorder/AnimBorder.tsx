import React from "react";
import styles from "./animBorder.module.css";

interface Props {
    children: React.ReactNode;
    className: string;
    type: string
}

const AnimBorder: React.FC<Props> = ({children, className, type }) => {
    return (
        <div className={`${styles.anim_border} ${className} ${type == "static" ? styles.animation : styles.animation} `} >
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default AnimBorder;
