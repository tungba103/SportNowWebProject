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
import { AdminLayout, DefaultLayout, ViewerLayout } from '../components';
import Test from '../pages/Test';

const WebRoutes = [
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp },
  { path: '/', component: HomePage, Layout: ViewerLayout },
  { path: '/home', component: HomePage, Layout: ViewerLayout },
  { path: '/ball', component: BallPage, Layout: ViewerLayout },
  { path: '/shirt', component: ShirtPage, Layout: ViewerLayout },
  { path: '/short', component: ShortPage, Layout: ViewerLayout },
  { path: '/socks', component: SocksPage, Layout: ViewerLayout },
  { path: '/detail/:id', component: ItemDetailPage, Layout: ViewerLayout },
  { path: '/contact', component: FeedbackPage, Layout: ViewerLayout },
  { path: '/test', component: Test, Layout: DefaultLayout },

  { path: '/', component: HomePage, Layout: DefaultLayout },
  { path: '/home', component: HomePage, Layout: DefaultLayout },
  { path: '/ball', component: BallPage, Layout: DefaultLayout },
  { path: '/shirt', component: ShirtPage, Layout: DefaultLayout },
  { path: '/short', component: ShortPage, Layout: DefaultLayout },
  { path: '/socks', component: SocksPage, Layout: DefaultLayout },
  { path: '/detail/:id', component: ItemDetailPage, Layout: DefaultLayout },
  { path: '/contact', component: FeedbackPage, Layout: DefaultLayout },
  { path: '/profile', component: ProfilePage, Layout: DefaultLayout },
  { path: '/checkout', component: CheckoutPage, Layout: DefaultLayout },

  { path: '/admin', component: ManageRevenue, Layout: AdminLayout },
  { path: '/manage_revenue', component: ManageRevenue, Layout: AdminLayout },
  { path: '/manage_feedback', component: ManageFeedback, Layout: AdminLayout },
  { path: '/manage_storage', component: ManageStorage, Layout: AdminLayout },
  { path: '/manage_account', component: ManageAccount, Layout: AdminLayout },
];

const DefaultRoutes = [];

const AdminRoutes = [];

export { WebRoutes };
