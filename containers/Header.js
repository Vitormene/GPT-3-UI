import Image from 'next/image'
import styles from '../styles/Header.module.css'

import people from '../public/assets/people.png'
import ai from '../public/assets/ai.png'
const Header = () => {
  return (
    <div className={styles.gpt3__header + ' section__padding'} id="home">
      <div className={styles.gpt3__header_content}>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className={styles.gpt3__header_content__input}>
          <input type={'email'} placeholder="Your Email Address" />
          <button type='button'>Get Started</button>
        </div>
        <div className={styles.gpt3__header_content__people}>
          <Image src={people} width={181.79} height={38} alt="Peoples" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className={styles.gpt3__header_image}>
        <Image src={ai} alt="AI" width={'100%'} height={'100%'} />
      </div>
    </div>
  )
}

export default Header
