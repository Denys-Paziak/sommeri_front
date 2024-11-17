import styles from "./BlogCart.module.css";
import Link from 'next/link';

export const BlogCart = () => {
    return (
        <Link href={'/uk/blog/Lorem'}>
            <div className={styles.card}>
                <div className={styles.image}></div>
                <div className={styles.text}>
                    <h3 className={styles.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, tempora?</h3>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea in quisquam nihil ratione architecto delectus doloribus officiis amet rerum qui assumenda sequi sit mollitia, voluptatem, placeat incidunt adipisci aut?</p>
                </div>
            </div>
        </Link>
    )
}

export default BlogCart

