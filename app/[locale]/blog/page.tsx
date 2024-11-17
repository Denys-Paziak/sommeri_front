import { BlogCart } from '@/app/components/pages/blog/blogCart/BlogCart';
import React from 'react'
import styles from './blog.module.css';

const Blog = () => {
    return (
        <div className='container'>
            <div className={styles.blogWrapper}>
                <BlogCart />
                <BlogCart />
                <BlogCart />
                <BlogCart />
                <BlogCart />
                <BlogCart />
                <BlogCart />
                <BlogCart />
                <BlogCart />
                <BlogCart />
                <BlogCart />
                <BlogCart />
                <BlogCart />
            </div>

        </div>
    )
}


export default Blog;
