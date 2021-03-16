import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteCreateComponent } from './components/quote-create/quote-create.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { QuoteUpdateComponent } from './components/quote-update/quote-update.component';
import { QuoteService } from './services/quote.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { QuoteDeleteComponent } from './components/quote-delete/quote-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteCreateComponent,
    QuoteDetailsComponent,
    QuoteListComponent,
    QuoteUpdateComponent,
    QuoteDeleteComponent,
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatDatepickerModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
  ],
  providers: [
    QuoteService,
    MatDialog,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [QuoteDetailsComponent],
})
export class AppModule {}
