import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuoteService } from 'src/app/services/quote.service';
import { QuoteUpdateComponent } from '../quote-update/quote-update.component';

@Component({
  selector: 'app-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.css'],
})
export class QuoteCreateComponent implements OnInit {
  form: FormGroup;
  description: any;
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
    this.description = 'Add';
    this.quoteType = '';
    this.contact = '';
    this.task = '';
    this.taskType = '';
    this.dueDate = '';
  }

  ngOnInit() {
    this.form = this.fb.group({
      QuoteType: [this.quoteType, [Validators.required]],
      Contact: [this.contact, [Validators.required]],
      Task: [this.task, [Validators.required]],
      TaskType: [this.taskType, [Validators.required]],
      DueDate: [this.dueDate, [Validators.required]],
    });
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.quoteService.create(this.form.value).subscribe(
      (error) => {
        console.log(error);
      },
      () => {
        console.log('I am done');
      }
    );
    console.log(this.form.value);
    this.dialogRef.close(this.form.value);
    this.dialogRef.close();
  }
}
