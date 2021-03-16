import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css'],
})
export class QuoteDetailsComponent implements OnInit {
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
    private dialogRef: MatDialogRef<QuoteDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.description = 'Detail';
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
    this.dialogRef.close(this.form.value);
  }
}
