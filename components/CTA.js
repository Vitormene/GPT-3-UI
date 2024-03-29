import styles from '../styles/CTA.module.css'

const CTA = () => {
  return (
    <div className={styles.gpt3__cta}>
      <div className={styles.gpt3__cta_content}>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className={styles.gpt3__cta_btn}>
          <button type='button'>Get Started</button>
      </div>
    </div>
  )
}

export default CTA
