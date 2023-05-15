import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'list-client',
    loadComponent: () => import('./pages/list-client/list-client.page').then( m => m.ListClientPage)
  },
  {
    path: 'list-client-coten',
    loadComponent: () => import('./pages/list-client/list-client.page').then( m => m.ListClientPage)
  },
  {
    path: 'details-client/:id',
    loadComponent: () => import('./pages/list-client/details-client/details-client.page').then( m => m.DetailsClientPage)
  },
  {
    path: 'ajout-client',
    loadComponent: () => import('./pages/list-client/ajout-modif-client/ajout-modif-client.page').then( m => m.AjoutModifClientPage)
  },
  {
    path: 'modif-client/:id',
    loadComponent: () => import('./pages/list-client/ajout-modif-client/ajout-modif-client.page').then( m => m.AjoutModifClientPage)
  },
  {
    path: 'ajout-card',
    loadComponent: () => import('./pages/ajout-card/ajout-card.page').then( m => m.AjoutCardPage)
  },
  {
    path: 'update-card/:id',
    loadComponent: () => import('./pages/ajout-card/ajout-card.page').then( m => m.AjoutCardPage)
  },
  {
    path: 'liste-cartes',
    loadComponent: () => import('./pages/liste-cartes/liste-cartes.page').then( m => m.ListeCartesPage)
  },
  {
    path: 'details-cartes/:id',
    loadComponent: () => import('./pages/liste-cartes/details-cartes/details-cartes.page').then( m => m.DetailsCartesPage)
  },
  {
    path: 'liste-transaction',
    loadComponent: () => import('./liste-transaction/liste-transaction.page').then( m => m.ListeTransactionPage)
  },
  {
    path: 'ajout-transaction',
    loadComponent: () => import('./liste-transaction/ajout-transaction/ajout-transaction.page').then( m => m.AjoutTransactionPage)
  },
  {
    path: 'ajout-reclamation',
    loadComponent: () => import('./pages/ajout-reclamation/ajout-reclamation.page').then( m => m.AjoutReclamationPage)
  },
  {
    path: 'liste-reclamation',
    loadComponent: () => import('./pages/liste-reclamation/liste-reclamation.page').then( m => m.ListeReclamationPage)
  },






];
