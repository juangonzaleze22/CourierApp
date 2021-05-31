import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'register/:id',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('./pages/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'tracing',
    loadChildren: () => import('./pages/tracing/tracing.module').then( m => m.TracingPageModule)
  },
  {
    path: 'pay-orders',
    loadChildren: () => import('./pages/pay-orders/pay-orders.module').then( m => m.PayOrdersPageModule)
  },
  {
    path: 'directions',
    loadChildren: () => import('./pages/directions/directions.module').then( m => m.DirectionsPageModule)
  },
  {
    path: 'mode',
    loadChildren: () => import('./pages/mode/mode.module').then( m => m.ModePageModule)
  },
  {
    path: 'home-chef',
    loadChildren: () => import('./pages/home-chef/home-chef.module').then( m => m.HomeChefPageModule)
  },
  {
    path: 'orders-chef',
    loadChildren: () => import('./pages/orders-chef/orders-chef.module').then( m => m.OrdersChefPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
