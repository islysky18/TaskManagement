import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { QuoteUpdateComponent } from './components/quote-update/quote-update.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/user/login/login.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'quotes', component: QuoteListComponent, canActivate: [AuthGuard] },
  {
    path: 'login',
    component: UserComponent,
  },

  // { path: 'quote', component: QuoteListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
