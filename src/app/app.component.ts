import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuoteCreateComponent } from './components/quote-create/quote-create.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TaskManagement';
  constructor(private dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(QuoteCreateComponent, {});
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
