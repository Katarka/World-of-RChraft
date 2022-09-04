import React from "react";

import styles from './BlogPage.module.css'

const BlogPage = () => (
    <div className={styles.blogPage}>
        <div className={styles.wrapper}>
            <h1 className={styles.BlogMainTitle}>Блог великолепной, Шонни!</h1>
            <div className={styles.blogItemWrapper}>
                <div className={styles.blogItemTopRow}>
                    <h2 className={styles.blogItemTitle}>Title</h2>
                    <div className={styles.blogItemDate}><span className={styles.dateNum}>19</span><span className={styles.dateMon}>dec</span></div>
                </div>
                <p className={styles.blogItemText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt placeat architecto dignissimos doloribus, quia aspernatur aperiam reiciendis natus, magni impedit similique laudantium esse culpa soluta accusantium quos adipisci temporibus. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt placeat architecto dignissimos doloribus, quia aspernatur aperiam reiciendis natus, magni impedit similique laudantium esse culpa soluta accusantium quos adipisci temporibus. <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quo quisquam non voluptate soluta asperiores harum obcaecati, cupiditate reiciendis, dolore corrupti placeat possimus! Provident, minus. Consectetur dignissimos illum veritatis, consequuntur animi odio accusantium praesentium deleniti voluptatibus minima molestiae fugit, excepturi nobis autem, iusto omnis? Maxime recusandae officia ducimus neque sapiente cum sed provident culpa eos vitae amet, fugit eum numquam repellat inventore autem beatae doloribus sequi deserunt. Cupiditate laborum amet earum, ipsa autem nam, sint eum expedita blanditiis, quia vel. Nam natus officiis possimus saepe, voluptas dolorem corporis mollitia accusantium quis minima et nobis nihil eveniet tenetur, quas tempora! Neque, ab soluta at fugit accusamus obcaecati consequuntur error vero fugiat similique, perspiciatis distinctio hic, dolor maxime repudiandae ducimus aut voluptates sit libero est. Explicabo laudantium quas libero quis cupiditate labore atque nostrum asperiores mollitia voluptas, nihil nam, eaque blanditiis numquam impedit in sint velit eveniet eum omnis recusandae rerum! Odit dignissimos maiores aspernatur corrupti ex vitae placeat natus rem tempora, ullam aperiam tempore fugiat molestiae minima architecto sit quam molestias, iure eligendi quas quasi sequi laborum? Sequi officiis aspernatur earum! Soluta autem consequatur id in numquam dignissimos corrupti quas, impedit cupiditate reprehenderit modi velit possimus ad sit itaque saepe consectetur.
                </p>
            </div>
        </div>
    </div>
)

export default BlogPage