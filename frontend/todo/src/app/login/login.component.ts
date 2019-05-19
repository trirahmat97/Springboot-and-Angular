import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'tra';
  password = 'tra';
  errorMassage = 'Invailid Credential';
  invalidLogin = false;

  constructor(
    private router: Router,
    private hardcodedAuthentication: HardcodeAuthenticationService
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    if(this.hardcodedAuthentication.authentication(this.username, this.password)){
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
  }

}
