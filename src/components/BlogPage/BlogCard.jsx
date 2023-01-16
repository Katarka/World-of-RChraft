import { DocumentRenderer } from '@keystone-6/document-renderer';
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = (
    //props
    {
        styles,
        title,
        id,
        content,
        text,
        publishedAt,
        parceFunc,
        splitContentText,
    }
) => {

    return (
        <>
            <div className={styles.blogItemWrapper} key={title} id={id}>
                <div className={styles.blogItemTopRow}>
                    <h2 className={styles.blogItemTitle}>{title}</h2>
                    <div className={styles.blogItemDate}>
                        <span className={styles.dateNum}>{parceFunc(publishedAt)}</span>
                    </div>
                </div>
                
                <div>{splitContentText(text)}<Link to={`/blog/${id}`} className='text-cyan-600'> View more...</Link></div>
                
                {/* <DocumentRenderer document={content.document} /> */}
            </div>
        </>
    )
}



export default BlogCard;