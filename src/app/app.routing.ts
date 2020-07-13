import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent, children: [
            {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
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
    // preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
    // useHash: true
});
