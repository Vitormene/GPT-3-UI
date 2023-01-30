import Image from 'next/image';
import styles from '../styles/Article.module.css'
const Article = ({ imgUrl, date, text }) => (
  <div className={styles.gpt3__blog_container_article}>
    <div className={styles.gpt3__blog_container_article_image}>
      <Image src={imgUrl} alt="blog_image" />
    </div>
    <div className={styles.gpt3__blog_container_article_content}>
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article
