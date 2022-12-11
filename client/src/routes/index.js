import {
  FeedbackPage,
  HomePage,
  ItemDetailPage,
  ProfilePage,
  SignIn,
  SignUp,
  CheckoutPage,
  ManageRevenue,
  ManageFeedback,
  ManageStorage,
  ManageAccount,
  BallPage,
  ShirtPage,
  ShortPage,
  SocksPage,
} from '../pages';
import { AdminLayout, DefaultLayout, UserLayout } from '../components';
import Test from '../pages/Test';

const WebRoutes = [
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp },
  { path: '/', component: HomePage, Layout: DefaultLayout },
  { path: '/home', component: HomePage, Layout: DefaultLayout },
  { path: '/ball', component: BallPage, Layout: DefaultLayout },
  { path: '/shirt', component: ShirtPage, Layout: DefaultLayout },
  { path: '/short', component: ShortPage, Layout: DefaultLayout },
  { path: '/socks', component: SocksPage, Layout: DefaultLayout },
  { path: '/detail/:id', component: ItemDetailPage, Layout: DefaultLayout },
  { path: '/test', component: Test, Layout: DefaultLayout },

  { path: '/contact', component: FeedbackPage, Layout: UserLayout },
  { path: '/profile', component: ProfilePage, Layout: UserLayout },
  { path: '/checkout', component: CheckoutPage, Layout: UserLayout },

  { path: '/admin', component: ManageRevenue, Layout: AdminLayout },
  { path: '/manage_revenue', component: ManageRevenue, Layout: AdminLayout },
  { path: '/manage_feedback', component: ManageFeedback, Layout: AdminLayout },
  { path: '/manage_storage', component: ManageStorage, Layout: AdminLayout },
  { path: '/manage_account', component: ManageAccount, Layout: AdminLayout },
];

export { WebRoutes };
