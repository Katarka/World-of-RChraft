import { useQuery } from '@apollo/client';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import React from 'react';
import { useParams } from 'react-router-dom';
import { FETCH_POST } from '../../apollo/Posts';

import bgimage from '../../assets/backgroundS.jpg';

import styles from './BlogPage.module.css';

const BlogPage = () => {
    const { id } = useParams(); 

    const { loading, error, data } = useQuery(FETCH_POST, {
        variables: {
            id: id
        }
    })
    console.log(data);

    //функция для работы с текстом
    const splitContentText = (text) => {
        let slittedText = text.split('.');
        return slittedText[0];
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
        <div className={styles.blogPage}>
            <div className='container mx-auto'>
                <div className={styles.blogItemWrapper} key={data.post.title} id={data.post.id}>
                    <div className={styles.blogItemTopRow}>
                        <h2 className={styles.blogItemTitle}>{data.post.title}</h2>

                    </div>             
                    <DocumentRenderer document={data.post.content.document} />
                </div>
            </div>
        </div>
    )
}

export default BlogPage;