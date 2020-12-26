import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthComponent} from "./auth/auth.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./core/guards/auth.guard";


const routes: Routes = [
  {path: 'identify', component: AuthComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
