import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  role: string;
  errorMessage: string;
  currentBuyer: any;
  currentSeller: any;
  inputType;
  passwordCheckbox;

  testBuyer : any = { buyerId: 0 };
  testSeller : any = { sellerId: 0 };
  

  constructor(protected emartService: EmartService,
              protected loginService: LoginService,
              protected router: Router) { }

  ngOnInit(): void {
    this.inputType = 'password';
    this.passwordCheckbox = false;
    this.errorMessage = '';
    localStorage.setItem("currentBuyer" , JSON.stringify(this.testBuyer));
    localStorage.setItem("currentSeller" , JSON.stringify(this.testSeller));
    
  }
  validate(){
    if(this.role == 'buyer'){
        this.emartService.validateBuyer(this.username, this.password).subscribe((response)=> 
                                                {
                                                  this.currentBuyer = response;
                                                  this.emartService.setBuyer(this.currentBuyer);
                                                  localStorage.setItem("currentBuyer", JSON.stringify(this.currentBuyer));
                                                  localStorage.setItem("currentSeller" , JSON.stringify(this.testSeller));
                                                  if(this.currentBuyer.buyerId != 0){
                                                    this.loginService.loginBuyer(this.currentBuyer);
                                                    this.loginService.loggedIn();
                                                    
                                                    this.router.navigate(['item-list']);
                                                  }
                                                  else{
                                                    this.errorMessage = "Invalid Username/Password";
                                                    document.getElementById("username").focus();
                                                  }

                                                }
          );
    }

    if(this.role == 'seller'){
      this.emartService.validateSeller(this.username, this.password).subscribe((response)=> 
      {
        this.currentSeller = response;
        this.emartService.setSeller(this.currentSeller);
        localStorage.setItem("currentSeller", JSON.stringify(this.currentSeller));
        localStorage.setItem("currentBuyer" , JSON.stringify(this.testBuyer));
        if(this.currentSeller.sellerId != 0){
          this.loginService.loginSeller(this.currentSeller);
          this.loginService.loggedIn();
          this.router.navigate(['seller-items']);
        }
        else{
          this.errorMessage = "Invalid Username/Password";
        }

      }
      );

    }

  }


  hideShowPassword(){
    if (this.inputType == 'password')
      this.inputType = 'text';
    else
      this.inputType = 'password';
  }
}
