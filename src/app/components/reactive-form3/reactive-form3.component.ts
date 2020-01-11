import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form3',
  templateUrl: './reactive-form3.component.html',
  styleUrls: ['./reactive-form3.component.css']
})
export class ReactiveForm3Component implements OnInit {

   customerRegistration = new FormGroup({
       customerName: new FormControl(''),
       customerEmail: new FormControl(''),
       customerPhone: new FormControl(''),
       customerAddress: new FormGroup({
         city: new FormControl(''),
         street: new FormControl(''),
         state: new FormControl(''),
         postalCode: new FormControl('') 
       })  
   });
   
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    // console.log(this.customerRegistration.value)
    //  console.log(this.customerRegistration.get(['customerAddress', 'city']).value)
    console.log(this.customerRegistration.get('customerAddress').get('city').value)


  }

}
