import {
  FeedbackPage,
  HomePage,
  ItemDetailPage,
  ProfilePage,
  SignIn,
  SignUp,
  CheckoutPage,
  CheckoutCart,
  ManageRevenue,
  ManageFeedback,
  ManageStorage,
  ManageAccount,
  BallPage,
  ShirtPage,
  ShortPage,
  SocksPage,
} from '../pages';
import { AdminLayout, DefaultLayout } from '../components';
import Test from '../pages/Test';

// Get item API
const items = [
  { image: 'arsenal_shirt.png', name: 'Arsenal Shirt', price: '10' },
  { image: 'arsenal_ball.png', name: 'Arsenal Ball', price: '10' },
  { image: 'arsenal_socks.png', name: 'Arsenal socks', price: '10' },
  { image: 'arsenal_short.png', name: 'Arsenal short', price: '10' },
];

const itemRoutes = [];
// items.forEach((currentValue) => {
//   itemRoutes.push({
//     path: `/${currentValue.image}`,
//     component: ItemDetailPage,
//     layout: UserLayout,
//   });
// });

const ViewerRoutes = [
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp },
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
  { path: '/test', component: Test, Layout: DefaultLayout },
];

export { ViewerRoutes };
