import React, {useEffect} from "react";
import { useQuery } from "@apollo/client";
import { DocumentRenderer } from '@keystone-6/document-renderer';

import { FETCH_PAGINATED_POSTS } from "../../apollo/Posts";

import styles from './BlogPage.module.css'

const BlogPage = () => {

    const { loading, error, data } = useQuery(FETCH_PAGINATED_POSTS)
    console.log(data);

    if (loading) {
        return <h2 className={styles.loader}>loading...</h2>
    }

    if (error) {
        return (
        <div className="">
            <h2 className='text-center pt-5'>Could not fetch. We are working at problem</h2>
        </div>
        )
    }
    // useEffect(() => {
    //     console.log(data)
    // },[])
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
                                                <span className={styles.dateNum}>{el.publishedAt}</span>
                                                <span className={styles.dateMon}>dec</span>
                                            </div>
                                        </div>
                                        <DocumentRenderer document={el.content.document} />
                                        {/*<div dangerouslySetInnerHTML={{__html: el.summary}}></div>  */}
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