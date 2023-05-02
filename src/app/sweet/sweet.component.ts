import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExpenselistService } from '../services/expenselist.service';

@Component({
  selector: 'app-sweet',
  templateUrl: './sweet.component.html',
  styleUrls: ['./sweet.component.css']
})
export class SweetComponent {
  form: any;

  constructor(private fb:FormBuilder, private exService: ExpenselistService) {
    this.form = fb.group({
      extitle: ['', [Validators.required]],
      examount: ['', [Validators.required, Validators.min(1)]],
      extype: ['', [Validators.required]]
    });
  }

  get formdata() {   
    return this.form.controls;
  }

  get expenses() {
    return 'hi';
  }

  doSubmit() {
    if (!this.form.valid) return

    let fd = this.form;
    let data = {
      title:  fd.value.extitle,
      amount: fd.value.examount,
      type:   fd.value.extype
    }
    let response = this.exService.postItem('expdata', fd);
    if (response.status == 'success')
      this.form.reset();
    return response;
  }
}
