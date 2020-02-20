import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {ConfirmationComponent} from './pages/confirmation/confirmation.component';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent, children: [
            {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
            {
                path: 'account',
                loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
                data: {breadcrumb: 'Account Settings'}
            },
            {
                path: 'compare',
                loadChildren: () => import('./pages/compare/compare.module').then(m => m.CompareModule),
                data: {breadcrumb: 'Compare'}
            },
            {
                path: 'wishlist',
                loadChildren: () => import('./pages/wishlist/wishlist.module').then(m => m.WishlistModule),
                data: {breadcrumb: 'Wishlist'}
            },
            {
                path: 'cart',
                loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule),
                data: {breadcrumb: 'Carrito de compra'}
            },
            {
                path: 'checkout',
                loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule),
                data: {breadcrumb: 'Pago de pedido'}
            },
            {
                path: 'contact',
                loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule),
                data: {breadcrumb: 'Contact'}
            },
            {
                path: 'sign-in',
                loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule),
                data: {breadcrumb: 'Sign In'}
            },
            {
                path: 'confirmation',
                loadChildren: () => import('./pages/confirmation/confirmation.module').then(m => m.ConfirmationModule),
                data: {breadcrumb: 'Agradecimiento'}
            },
            {
                path: '',
                loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
                data: {breadcrumb: 'Todos los productos'}
            },
            {
                path: '404',
                loadChildren: () => import('./pages/not-exist/not-exist.module').then(m => m.NotExistModule),
                data: {breadcrumb: 'No encontrado'}
            }
        ]
    },
    {
        path: '**', redirectTo: '404'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: true
});
