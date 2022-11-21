import { AdminLayout, UserLayout, ViewerLayout } from '../components';
import { AccountPage, AdminPage, CheckoutPage, ContainerItemPage, HomePage, ItemDetailPage } from '../pages';

// Get item API
const items = [
  { image: 'arsenal_shirt.png', name: 'Arsenal Shirt', price: '10' },
  { image: 'arsenal_ball.png', name: 'Arsenal Ball', price: '10' },
  { image: 'arsenal_socks.png', name: 'Arsenal socks', price: '10' },
  { image: 'arsenal_short.png', name: 'Arsenal short', price: '10' },
];

const itemRoutes = [];
items.forEach((currentValue) => {
  itemRoutes.push({
    path: `/${currentValue.image}`,
    component: ItemDetailPage,
    layout: UserLayout,
  });
});

const ViewerRoutes = [{ path: '/', component: HomePage, layout: ViewerLayout }];
const UserRoutes = [
  { path: '/', component: HomePage, layout: UserLayout },
  { path: '/shirt', component: ContainerItemPage, layout: UserLayout },
  { path: '/short', component: ContainerItemPage, layout: UserLayout },
  { path: '/socks', component: ContainerItemPage, layout: UserLayout },
  { path: '/ball', component: ContainerItemPage, layout: UserLayout },
  { path: '/account', component: AccountPage, layout: UserLayout },
  { path: '/checkout', component: CheckoutPage, layout: UserLayout },
  ...itemRoutes,
];
const AdminRoutes = [{ path: '/admin', component: AdminPage, layout: AdminLayout }];

export { ViewerRoutes, UserRoutes, AdminRoutes };
