import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuoteCreateComponent } from './components/quote-create/quote-create.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TaskManagement';
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(QuoteCreateComponent, {});

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
