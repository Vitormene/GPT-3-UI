import styles from '../styles/Navbar.module.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react'

import logo from '../public/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Menu = () => {
  return <>
    <p><Link href={'#home'} scroll={false}>Home</Link></p>
    <p><Link href={'#wgpt3'} scroll={false}>What is GPT3?</Link></p>
    <p><Link href={'#possibility'} scroll={false}>Open AI</Link></p>
    <p><Link href={'#features'} scroll={false}>Case Studies</Link></p>
    <p><Link href={'#blog'} scroll={false}>Library</Link></p>
  </>
}
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className={styles.gpt3__navbar}>
      <div className={styles.gpt3__navbar_links}>
        <div className={styles.gpt3__navbar_links_logo}>
          <Image src={logo} alt="Logo" width={62.56} height={16.02} />
        </div>
        <div className={styles.gpt3__navbar_links_container}>
          <Menu />
        </div>
      </div>
      <div className={styles.gpt3__navbar_sign}>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className={styles.gpt3__navbar_menu}>
        {toggleMenu
          ? <RiCloseLine color="#FFF" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#FFF" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className={styles.gpt3__navbar_menu_container + ' scale-up-center'}>
            <div className={styles.gpt3__navbar_menu_container_links}>
              <Menu />
            </div>
            <div className={styles.gpt3__navbar_menu_container_links_sign}>
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

