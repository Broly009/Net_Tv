import styles from "@/app/styles/navbar.module.css"
import Link from "next/link"
import Nav from "./Nav"
import { RiNetflixFill } from "react-icons/ri";

export default function Header() {
  return (
    <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
            <Link href="/">
                <RiNetflixFill style={{color:"#E50914"}} size={70}/>
            </Link>
        </div>
        
        <div>
            <Nav/>
        </div>
    </header>
  )
}
