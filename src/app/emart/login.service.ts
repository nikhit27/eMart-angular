import { Injectable } from '@angular/core';
import { Buyer } from './buyer';
import { EmartService } from './emart.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  localBuyer: any;
  localSeller: any;
  buyer: any;
  seller: any;
  cartItems : any;
  logged : boolean;

  constructor(protected emartService:EmartService) { 
    this.logged = false;
    this.localBuyer = { buyerId: 0 };
    this.localSeller = { sellerId : 0 };
  }


  loginBuyer(buyer: any){
    this.buyer = buyer;
  }
  loginSeller(seller: any){
    this.seller = seller;
  }

  logout(){
    this.loggedOut();
    // this.isLogged();

    this.buyer = null;
    this.seller = null;
    
    this.emartService.setBuyer(this.buyer);
    this.emartService.setSeller(this.seller);

    this.emartService.setAllBills([]);
    this.emartService.setAllCart([]);
    
  }

  isLogged(){
    this.localBuyer = { buyerId: 0 };
    this.localSeller = { sellerId : 0 };
    this.localBuyer = JSON.parse(localStorage.getItem("currentBuyer"));
    this.localSeller = JSON.parse(localStorage.getItem("currentSeller"));

    if(this.localBuyer.buyerId != 0){
      return true;
    }
    else if(this.localSeller.sellerId != 0){
      return true;
    }
    return false;
  }

  isSellerOrBuyer(){  
    this.localBuyer = JSON.parse(localStorage.getItem("currentBuyer"));
    this.localSeller = JSON.parse(localStorage.getItem("currentSeller"));

    if(this.localBuyer.buyerId != 0){
      return true;
    }
    else if(this.localSeller.sellerId != 0){
      return false;
    }
    return false;
  }

  loggedIn(){
    this.logged = true;
  }

  loggedOut(){
    let temp: any = { buyerId : 0 };
    localStorage.setItem("currentBuyer", JSON.stringify(temp));
    this.localBuyer = JSON.parse(localStorage.getItem("currentBuyer"));

    let temp1: any = { sellerId : 0};
    localStorage.setItem("currentSeller", JSON.stringify(temp1));
    this.localSeller = JSON.parse(localStorage.getItem("currentSeller"));
    // this.logged = false;

  }
}
