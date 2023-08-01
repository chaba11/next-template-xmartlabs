import { RouteName } from '@/helpers/routes';
import globalStyles from 'assets/stylesheets/global-styles.module.scss';
// import { AppLink } from '@/common/app-link';
// import { Avatar } from '@/common/avatar';
import styles from './navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import nextLogo from 'public/next.svg';

export const Navbar = () => (
  <div className={styles.container}>
    <div className={globalStyles.genericContainer}>
      <div className={styles.internalContainer}>
        <div>
          <Link href={RouteName.Home}>
            <Image
              src={nextLogo}
              alt="Next.js Logo"
              width={100}
              height={25}
            />
          </Link>
        </div>
        <div className={styles.rightContainer}>
          <nav>
            <Link className={globalStyles.link} href={RouteName.About}>
              About
            </Link>
          </nav>
          {/* <Avatar size="s" /> */}
        </div>
      </div>
    </div>
  </div>
);
