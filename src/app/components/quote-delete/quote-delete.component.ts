import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuoteService } from 'src/app/services/quote.service';
import { QuoteUpdateComponent } from '../quote-update/quote-update.component';

@Component({
  selector: 'app-quote-delete',
  templateUrl: './quote-delete.component.html',
  styleUrls: ['./quote-delete.component.css'],
})
export class QuoteDeleteComponent implements OnInit {
  form: FormGroup;
  description: any;
  quoteID: any;
  quoteType: any;
  contact: any;
  task: any;
  taskType: any;
  dueDate: any;

  constructor(
    private router: Router,
    private quoteService: QuoteService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<QuoteDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.description = 'Delete';
    this.quoteID = data.quoteID;
    this.quoteType = data.quoteType;
    this.contact = data.contact;
    this.task = data.task;
    this.taskType = data.taskType;
    this.dueDate = data.dueDate;
  }

  ngOnInit() {
    this.form = this.fb.group({
      QuoteID: [this.quoteID, []],
      QuoteType: [this.quoteType, []],
      Contact: [this.contact, []],
      Task: [this.task, []],
      TaskType: [this.taskType, []],
      DueDate: [this.dueDate, []],
    });
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.quoteService.delete(this.quoteID).subscribe(
      (error) => {
        console.log(error);
      },
      () => {
        console.log('I am done');
      }
    );
    console.log(this.form.value);
    console.log(this.quoteID);
    this.dialogRef.close(this.form.value);
    this.dialogRef.close();
  }
}
