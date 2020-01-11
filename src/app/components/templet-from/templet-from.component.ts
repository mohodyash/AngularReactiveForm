import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-templet-from',
  templateUrl: './templet-from.component.html',
  styleUrls: ['./templet-from.component.css']
})
export class TempletFromComponent implements OnInit {

  topics:string[] = ['Angular', 'React', 'Vue'];
 
  userModel = new User('Rob', 'rob@gmail.com', '1234','React','morning', true);
  constructor() { }

  ngOnInit() {

    // console.log(this.userModel);
  }

  submit(){
    console.log(this.userModel);

  }

}
