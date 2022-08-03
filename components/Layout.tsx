import React from "react";
import styles from '../styles/Layout.module.css'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>

                {children}
            </main>
        </div>
    );
}

export default Layout;