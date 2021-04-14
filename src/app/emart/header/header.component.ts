import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { EmartService } from '../emart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged: boolean;
  constructor(protected loginService: LoginService, protected emartService: EmartService) { }

  ngOnInit(): void {
    // let testBuyer : any = { buyerId: 0 };
    // localStorage.setItem("currentBuyer" , JSON.stringify(testBuyer));
  }

  navBarToggle(){
    return this.loginService.isLogged();
  }

  sellerOrBuyer(){
    // returns false for seller
    // true for buyer
    // console.log("header seller or buyer : " + this.loginService.isSellerOrBuyer());
    return this.loginService.isSellerOrBuyer();
  }
}
