import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.css']
})
export class ReactiveForm2Component implements OnInit {


   userRegistration = new FormGroup({
       firstName: new FormControl('', Validators.required),
       lastName: new FormControl(''),
       age:new FormControl(''),
       email:new FormControl('')
   });

   data:any;
   
   
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    // console.log(this.userRegistration.value);
    this.data = this.userRegistration.value; 
    // console.log(this.data);
    console.log(this.userRegistration.controls['firstName'].value)
  }

  

}
