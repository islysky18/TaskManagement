import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteListComponent } from './components/quote-list/quote-list.component';

const routes: Routes = [
  // { path: '', component: QuoteListComponent },
  // { path: '/quote', component: QuoteListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
