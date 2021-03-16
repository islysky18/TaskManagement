import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { QuoteUpdateComponent } from './components/quote-update/quote-update.component';

const routes: Routes = [
  { path: 'quotes', component: QuoteDetailsComponent },
  { path: 'update', component: QuoteUpdateComponent },
  // { path: 'quote', component: QuoteListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
