import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   toggleForm(){
    const container = document.querySelector('.container');
    // console.log("Hi");
    container?.classList.toggle('active');
   }

}





