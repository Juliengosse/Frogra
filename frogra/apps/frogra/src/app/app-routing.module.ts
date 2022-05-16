import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvionsComponent } from './avions/avions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AvionDetailComponent } from './avion-detail/avion-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CreditsComponent } from './credits/credits.component';
import { SelectionComponent } from './selection/selection.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path : 'home-page', component: HomePageComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: AvionDetailComponent },
  { path: 'avions', component: AvionsComponent },
  { path : 'main-menu', component: MainMenuComponent},
  { path: 'credits', component: CreditsComponent },
  { path: 'selection', component: SelectionComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }