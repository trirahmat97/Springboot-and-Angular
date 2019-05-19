import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "tra";
  password = "tra";
  errorMassage = "Invailid Credential";
  invalidLogin = false;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.username === "tra" && this.password === "tra"){
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
  }

}
