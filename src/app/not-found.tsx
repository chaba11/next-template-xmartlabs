import { RouteName } from '@/helpers/routes';
import Link from 'next/link';

// TODO: implement this page
const NotFound = () => (
  <div>
    This page does not exist!
    <Link href={RouteName.Home}>
      Go Home
    </Link>
  </div>
);

export default NotFound;
