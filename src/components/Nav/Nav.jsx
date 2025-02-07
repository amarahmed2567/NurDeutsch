import React from "react"
import styles from"./Nav.module.css"

const {NavContinar,Logo,NavList,Continar} = styles
function Nav() {
  return (
    <nav className={`${NavContinar} ${Continar}`}>
    <div className={Logo}>
            <img src="/public/logo.png" alt="nurdeutsch"/>
        </div>
    <div className={NavList}>
        <a href="#Home">Home</a>
        <a href="#Translate">Translate</a>
        <a href="#Ask AI">Ask AI</a>
        <a href="#contact">contact</a>
    </div>    
    </nav>
  );
}

export default Nav;
