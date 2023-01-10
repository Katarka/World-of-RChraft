import React from "react";
import { useQuery } from "@apollo/client";

import { FETCH_PAGINATED_POSTS } from "../../apollo/Posts";


import BlogCard from "../../components/BlogPage/BlogCard";
import bgimage from '../../assets/backgroundS.jpg';

import styles from './BlogsPage.module.css';

const BlogsPage = () => {

    const { loading, error, data } = useQuery(FETCH_PAGINATED_POSTS)
    // console.log(data);

    // функция преобразования времени в фомат для вывода через js
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
                <h1 className={styles.BlogMainTitle}>Блог великолепной, Шонни!</h1>
                {data.posts.map(el => {
                    console.log(el)
                    return (
                        <BlogCard
                            key={el.id}
                            id={el.id}
                            title={el.title}
                            content={el.content}
                            text={el.content.document[0].children[0].text}
                            publishedAt={el.publishedAt}
                            parceFunc={parceFunc}
                            styles={styles}
                            splitContentText={splitContentText}
                        />
                    )
                }
                )}
            </div>
        </div>
    )
}

export default BlogsPage


