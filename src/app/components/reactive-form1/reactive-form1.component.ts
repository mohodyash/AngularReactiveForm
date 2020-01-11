import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
@Component({
  selector: 'app-reactive-form1',
  templateUrl: './reactive-form1.component.html',
  styleUrls: ['./reactive-form1.component.css']
})
export class ReactiveForm1Component implements OnInit {

  email:any = new FormControl();


  updateEmail(){
    console.log("done");
  }

  ngOnInit() {
  }

}
