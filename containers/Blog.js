import styles from '../styles/Blog.module.css'
import { Article } from '@/components'
import blog01 from '../public/assets/blog01.png'
import blog02 from '../public/assets/blog02.png';
import blog03 from '../public/assets/blog03.png';
import blog04 from '../public/assets/blog04.png';
import blog05 from '../public/assets/blog05.png';
const Blog = () => {
  return (
    <div className={styles.gpt3__blog + ' section__padding'} id="blog">
    <div className={styles.gpt3__blog_heading}>
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className={styles.gpt3__blog_container}>
      <div className={styles.gpt3__blog_container_groupA}>
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className={styles.gpt3__blog_container_groupB}>
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
  )
}

export default Blog
