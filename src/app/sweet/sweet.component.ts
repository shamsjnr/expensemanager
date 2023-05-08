import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExpenselistService } from '../services/expenselist.service';
import { Expenses } from '../models/expenses';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-sweet',
  templateUrl: './sweet.component.html',
  styleUrls: ['./sweet.component.css']
})
export class SweetComponent implements OnInit {
  form: any;
  // total: number = 0;
  expenseData$ = this.exService.loadItems('expdata').pipe(shareReplay(1));
  status: Array<string> = [];

  total$ = this.expenseData$.pipe(
    map(expenses => expenses.reduce((tot, value) => tot + (value.type == 'credit' ? value.amount : -value.amount), 0))
  );

  constructor(private fb:FormBuilder, private exService: ExpenselistService) {
    this.form = fb.group({
      extitle: ['', [Validators.required]],
      examount: ['', [Validators.required, Validators.min(1)]],
      extype: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // this.exService.loadItems('expdata').subscribe(values => {
    //   this.expenseData = values;
    // });
  }

  get formdata() {   
    return this.form.controls;
  }

  // putSum(amount:number, type:string) {
  //   this.total += (type == 'credit') ? amount : -amount;
  // }

  doSubmit() {
    if (!this.form.valid) return

    let fd = this.form;
    let data:Expenses = {
      id: '',
      title:  fd.value.extitle,
      amount: fd.value.examount,
      type:   fd.value.extype,
      status: 0
    }
    
    this.exService.postItem('expdata', data);
    return this.form.reset();
  }

  doMod(target:string) {
    console.log(target);
  }

  doDrop(target:string) {
    console.log(target);
  }
}
