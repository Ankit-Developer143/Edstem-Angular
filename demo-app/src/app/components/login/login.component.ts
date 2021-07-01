import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string ='';
  password:any;
  checkoutForm:FormGroup;




  constructor(private FormBuilder:FormBuilder) {
    this.checkoutForm = FormBuilder.group({
      email:new FormControl,
      password:new FormControl
    })
  }

  ngOnInit(): void {

  }


  postData(){
    console.log(this.checkoutForm);


  }
}
