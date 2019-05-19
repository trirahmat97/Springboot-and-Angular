import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }

  authentication(username, password){
    console.log('before '+ this.isUserLoggedIn());
    if(username === 'tra' && password === 'tra'){
      sessionStorage.setItem('authenticationUser', username);
      console.log('after '+ this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticationUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticationUser');
  }
}
