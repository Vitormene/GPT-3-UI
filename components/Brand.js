import styles from '../styles/Brand.module.css'
import google from '../public/assets/google.png'
import slack from '../public/assets/slack.png'
import atlassian from '../public/assets/atlassian.png'
import dropbox from '../public/assets/dropbox.png'
import shopify from '../public/assets/shopify.png'
import Image from 'next/image'
const Brand = () => {
  return (
    <div className={styles.gpt3__brand + ' section__padding'}>
      <div>
          <Image src={google} alt="google" />
      </div>
      <div>
          <Image src={slack} alt="slack" />
      </div>
      <div>
          <Image src={atlassian} alt="atlassian" />
      </div>
      <div>
          <Image src={dropbox} alt="dropbox" />
      </div>
      <div>
          <Image src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand
