import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuoteDetailsComponent } from '../quote-details/quote-details.component';
import { QuoteUpdateComponent } from '../quote-update/quote-update.component';
import { QuoteCreateComponent } from '../quote-create/quote-create.component';
import { QuoteDeleteComponent } from '../quote-delete/quote-delete.component';

export interface Quote {
  QuoteID: number;
  QuoteType: string;
  Contact: string;
  Task: string;
  DueDate: Date;
  TaskType: string;
}

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
})
export class QuoteListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator; // pagenation
  @ViewChild('input', { static: true }) input: ElementRef; //filter
  displayedColumns: string[] = [
    'QuoteID',
    'QuoteType',
    'Contact',
    'Task',
    'DueDate',
    'TaskType',
    'Action',
  ];

  dataSource = new MatTableDataSource<any>();
  quotes: any[];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private quoteService: QuoteService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    //this.readQuotes();
    this.getData();
    console.log(this.dataSource);
  }
  // readQuotes() {
  //   this.quoteService.readAll().subscribe(
  //     (data) => {
  //       this.dataSource = data;
  //     },
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       console.log("I'm finished");
  //     }
  //   );
  // }
  getData() {
    this.quoteService.readAll().subscribe(
      (response: any) => {
        this.quotes = response;
        this.dataSource = new MatTableDataSource<any>(this.quotes);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log("I'm finished");
      }
    );
  }
  navigateToDetail() {
    this.router.navigate(['quotes']);
  }

  searchQuote(searchValue: string) {
    searchValue = searchValue.trim();
    searchValue = searchValue.toLowerCase();
    this.dataSource.filter = searchValue;
  }

  openDetailDialog(QuoteID, QuoteType, Contact, Task, DueDate, TaskType) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      quoteID: QuoteID,
      quoteType: QuoteType,
      contact: Contact,
      task: Task,
      dueDate: DueDate,
      taskType: TaskType,
    };
    //this.dialog.open(QuoteDetailsComponent, dialogConfig);
    const dialogRef = this.dialog.open(QuoteDetailsComponent, dialogConfig);
    dialogRef
      .afterClosed()
      .subscribe((data) => console.log('Dialog output:', data));
  }

  openEditDialog(QuoteID, QuoteType, Contact, Task, DueDate, TaskType) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      quoteID: QuoteID,
      quoteType: QuoteType,
      contact: Contact,
      task: Task,
      dueDate: DueDate,
      taskType: TaskType,
    };
    //this.dialog.open(QuoteUpdateComponent, dialogConfig);
    const dialogRef = this.dialog.open(QuoteUpdateComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.getData();
    });
  }

  openCreateDialog(QuoteType, Contact, Task, DueDate, TaskType) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      quoteType: QuoteType,
      contact: Contact,
      task: Task,
      dueDate: DueDate,
      taskType: TaskType,
    };
    //this.dialog.open(QuoteUpdateComponent, dialogConfig);
    const dialogRef = this.dialog.open(QuoteCreateComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {});
  }

  openDeleteDialog(QuoteID, QuoteType, Contact, Task, DueDate, TaskType) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      quoteID: QuoteID,
      quoteType: QuoteType,
      contact: Contact,
      task: Task,
      dueDate: DueDate,
      taskType: TaskType,
    };
    //this.dialog.open(QuoteUpdateComponent, dialogConfig);
    const dialogRef = this.dialog.open(QuoteDeleteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.getData();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(QuoteCreateComponent, {});
    dialogRef.afterClosed().subscribe(() => {
      this.getData();
    });
  }
}
