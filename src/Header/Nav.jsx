import { Component } from "react";
import styles from './Header.module.css'

class Nav extends Component{
    constructor(props){
        super()
    }
    render(){
      
        return(
            <ul className={`${styles.menu} ${styles.menus}`}>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        )
    }
}

export default Nav;