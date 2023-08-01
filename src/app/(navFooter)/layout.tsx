import { Footer } from "@/common/footer";
import { Navbar } from "@/common/navbar";
import styles from './layout.module.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
        <div className={styles.internalContainer}>
          <Navbar />
          {children}
        </div>
        <Footer />
      </div> 
    )
}