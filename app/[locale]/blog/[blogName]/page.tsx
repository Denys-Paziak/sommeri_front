import React from 'react'
import styles from './MoreBlog.module.css'
import { getBlog } from '@/app/utils/server/server';
import ReactMarkdown from 'react-markdown'

export const MoreBlog = async ({ params }: any) => {
    const content: any = await getBlog();


    if (!content) {
        return
    }


    return (
        <div className={styles.wrapper}>
            <div className='container'>
                <h2 className={styles.title}>{content.title}</h2>
                <p><ReactMarkdown>{content.content}</ReactMarkdown></p>
            </div>
        </div>

    )
}

export default MoreBlog;