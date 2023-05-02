import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  fd: any;

  constructor(private fb:FormBuilder, private afs:AngularFirestore) {
    this.fd = fb.group({
      exmail: ['', [Validators.required, Validators.email]],
      expass: ['', [Validators.required, Validators.minLength(6)]]
    });

    // this.afs.collection('expusers').add({
    //   name: 'Abdulazeez Nasir',
    //   username: 'shamsjnr',
    //   password: 'test'
    // }).then(response => {
    //   console.log(response);
    // }).catch(err => {
    //   console.log(err);
    // });
  }

  get form() {   
    return this.fd.controls;
  }
  
  doSubmit() {
    console.warn(this.fd.controls);
  }
}
