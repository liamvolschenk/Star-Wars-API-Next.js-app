import styles from '../styles/nav.module.css'

//a basic layout component
export default function Layout({ children }) {
    return <div className={styles.nav}>{children}</div>
}