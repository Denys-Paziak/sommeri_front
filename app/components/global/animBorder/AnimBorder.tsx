import React from "react";
import styles from "./animBorder.module.css";
import AnimatedWrapper from "../../UI/scrollAnimationWrapper/ScrollAnimationWrapper";

interface Props {
    children: React.ReactNode;
    className: string;
    type: string
}

const AnimBorder: React.FC<Props> = ({ children, className, type }) => {
    return (
        <AnimatedWrapper className={`${styles.anim_border} ${className} ${type == "static" ? styles.animation : styles.animation} `} type="fade-up" duration={1.4}>
            <div className={styles.content}>
                {children}
            </div>
        </AnimatedWrapper>
    );
};

export default AnimBorder;
