import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyTokenResolver } from '@app/Resolver/verify-token.resolver';
import { UpdatePasswordComponent } from '@Components/update-password/update-password.component';

const routes: Routes = [
  {
    path: '',
    component: UpdatePasswordComponent,
    resolve: { verifyToken: VerifyTokenResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePasswordRoutingModule {

}
