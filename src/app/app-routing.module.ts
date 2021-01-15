import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GameDetailsComponent} from './components/game-details/game-details.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from "./helpers/auth.guard";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'game/:id', component: GameDetailsComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  GameDetailsComponent
];
