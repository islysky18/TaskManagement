import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-quote-update',
  templateUrl: './quote-update.component.html',
  styleUrls: ['./quote-update.component.css'],
})
export class QuoteUpdateComponent implements OnInit {
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
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<QuoteUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    public quoteService: QuoteService
  ) {
    this.description = 'Updat Task';
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
    this.quoteService.update(this.quoteID, this.form.value).subscribe(
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
