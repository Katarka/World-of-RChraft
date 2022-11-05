import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { DocumentRenderer } from '@keystone-6/document-renderer';

import { FETCH_PAGINATED_POSTS } from "../../apollo/Posts";

import styles from './BlogPage.module.css'
import bgimage from '../../assets/backgroundS.jpg'

const BlogPage = () => {

    const { loading, error, data } = useQuery(FETCH_PAGINATED_POSTS)
    // console.log(data);

    let parceFunc = (el) => {
        let date = new Date(el);

        const dateOptions = {
            day: 'numeric',
            month: 'long',
            year: '2-digit',
        };
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
        };

        const dateFormatRU = new Intl.DateTimeFormat('ru', dateOptions);
        const timeFormatRU = new Intl.DateTimeFormat('ru', timeOptions);

        return (
            <>            
                <span className="whitespace-nowrap">{`${dateFormatRU.format(date)}`}</span><br />
                <span className="whitespace-nowrap">{`${timeFormatRU.format(date)}`}</span>
            </>

        )
    }

    if (loading) {
        return <h2 className={styles.loader}>Loading...</h2>
    }

    if (error) {
        return (
            <div style={{ backgroundImage: `url(${bgimage})` }} className='w-full h-full object-cover object-center'>
                <h2 className='text-center pt-12 text-white'>Could not fetch. We are working at problem</h2>
            </div>
        )
    }

    return (
        // <>
        //     <div className={styles.blogPage}>
        //         <div className={styles.wrapper}>
        //             <h1 className={styles.BlogMainTitle}>Блог великолепной, Шонни!</h1>
        //             <div className={styles.blogItemWrapper}>
        //                 <div className={styles.blogItemTopRow}>
        //                     <h2 className={styles.blogItemTitle}>Title</h2>
        //                     <div className={styles.blogItemDate}>
        //                         <span className={styles.dateNum}>19</span>
        //                         <span className={styles.dateMon}>dec</span>
        //                     </div>
        //                 </div>
        //                 <p className={styles.blogItemText}></p>
        //             </div>
        //         </div>
        //     </div>
        // </>
        <div className={styles.blogPage}>
            <div className={styles.wrapper}>
                <h1 className={styles.BlogMainTitle}>Блог великолепной, Шонни!</h1>
                {data.posts.map(el => {
                    console.log(el)
                    return (
                        <div className={styles.blogItemWrapper} key={el.title} id={el.id}>
                            <div className={styles.blogItemTopRow}>
                                <h2 className={styles.blogItemTitle}>{el.title}</h2>
                                <div className={styles.blogItemDate}>
                                    <span className={styles.dateNum}>{parceFunc(el.publishedAt)}</span>
                                </div>
                            </div>
                            <DocumentRenderer document={el.content.document} />
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default BlogPage


{/* <h1 className={styles.BlogMainTitle}>Блог великолепной, Шонни!</h1>

<div className={styles.blogItemWrapper}>
    <div className={styles.blogItemTopRow}>
        <h2 className={styles.blogItemTitle}>Title</h2>
        <div className={styles.blogItemDate}><span className={styles.dateNum}>19</span><span className={styles.dateMon}>dec</span></div>
    </div>
    <p className={styles.blogItemText}></p>
</div> */}