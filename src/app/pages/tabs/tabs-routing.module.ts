import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'close-to-me',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../close-to-me/close-to-me.module').then(m => m.CloseToMePageModule)
          }
        ]
      },
      {
        path: 'orders',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../orders/orders.module').then(m => m.OrdersPageModule)
          }
        ]
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'home-chef',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home-chef/home-chef.module').then(m => m.HomeChefPageModule)
          }
        ]
      },
      {
        path: 'add-plates',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../add-plates/add-plates.module').then(m => m.AddPlatesPageModule)
          }
        ]
      },
      {
        path: 'add-plates/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../add-plates/add-plates.module').then(m => m.AddPlatesPageModule)
          }
        ]
      },
      {
        path: 'orders-chef',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../orders-chef/orders-chef.module').then(m => m.OrdersChefPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
