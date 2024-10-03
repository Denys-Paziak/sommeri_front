import  styles from "./animSlider.module.css";
const AnimSlider = () => {
    return (
        <div>
            <div className={styles.slider}>
                <div className={styles.slideTrack}>
                    <div className={styles.slide}>1</div>
                    <div className={styles.slide}>2</div>
                    <div className={styles.slide}>3</div>
                    <div className={styles.slide}>4</div>
                    <div className={styles.slide}>5</div>
                    <div className={styles.slide}>6</div>
                    <div className={styles.slide}>7</div>
                    <div className={styles.slide}>8</div>
                    <div className={styles.slide}>9</div>
                    <div className={styles.slide}>10</div>
                    <div className={styles.slide}>1</div>
                    <div className={styles.slide}>2</div>
                    <div className={styles.slide}>3</div>
                    <div className={styles.slide}>4</div>
                    <div className={styles.slide}>5</div>
                    <div className={styles.slide}>6</div>
                    <div className={styles.slide}>7</div>
                    <div className={styles.slide}>8</div>
                    <div className={styles.slide}>9</div>
                    <div className={styles.slide}>10</div>
                </div>
            </div>
        </div>
    );
};

export default AnimSlider;