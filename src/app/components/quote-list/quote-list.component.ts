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
  dataSouce;
  dataSource = new MatTableDataSource<any>();
  quotes: any[];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    //this.readQuotes();
    this.getData();
    console.log(this.dataSource);
  }
  readQuotes() {
    this.quoteService.readAll().subscribe(
      (data) => {
        this.dataSource = data;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log("I'm finished");
      }
    );
  }
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
  navigateToDetail() {}
  navigateToEdit() {}
  navigateToDelete() {}
  searchQuote(searchValue: string) {
    searchValue = searchValue.trim();
    searchValue = searchValue.toLowerCase();
    this.dataSource.filter = searchValue;
  }
}
