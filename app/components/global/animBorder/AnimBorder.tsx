import React from "react";
import styles from "./animBorder.module.css";

interface Props {
    children: React.ReactNode;
    className: string;
    type: string
}

const AnimBorder: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={`${className}`} >
            <div className={`${styles.animation} ${styles.anim_border}`}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AnimBorder;
