import React from "react";
import { useQuery } from "@apollo/client";

import { FETCH_PAGINATED_POSTS } from "../../apollo/Posts";

import styles from './BlogPage.module.css'

const BlogPage = () => {


    const { loading, error, data } = useQuery(FETCH_PAGINATED_POSTS)
    console.log(data);

    if (loading) {
        return <h2 className={styles.loader}>loading...</h2>
    }

    return (
        <div className={styles.blogPage}>
            <div className={styles.wrapper}>
            <h1 className={styles.BlogMainTitle}>Блог великолепной, Шонни!</h1>
                {data.paginatedPosts.entries.map(el => {
                    console.log(el)
                    return (
                        <>                            
                            <div className={styles.blogItemWrapper} id={el.id}>
                                <div className={styles.blogItemTopRow}>
                                    <h2 className={styles.blogItemTitle}>{el.title}</h2>
                                    <div className={styles.blogItemDate}>
                                        <span className={styles.dateNum}>19</span>
                                        <span className={styles.dateMon}>dec</span>
                                    </div>
                                </div>
                                <div dangerouslySetInnerHTML={{__html: el.summary}}></div>  
                            </div>
                        </>
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