import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Components/principal/principal.module').then(m => m.PrincipalModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'update-password',
    loadChildren: () => import('./Components/update-password/update-password.module').then(m => m.UpdatePasswordModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
