import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css']
})
export class SellerSignupComponent implements OnInit {

  rName = '';
  rPassword = '';
  rrePassword = '';
  rCompany = '';
  rBrief = '';
  rGst: number = null;
  rAddress = '';
  rEmail = '';
  rWebsite = '';
  rContact: number = null;
  checkpass : boolean =false;

  constructor(protected emartService: EmartService, protected router: Router) { }

  ngOnInit(): void {
  }
  checkPassword(){ 
    if(this.rPassword == this.rrePassword){
      return true;
    }
    return false;
  }


  addSeller(){
    if(this.checkPassword()){
    let seller: any = {
      "sellerId" : 0,
      "sellerUsername" : this.rName,
      "sellerPassword" : this.rPassword,
      "sellerCompany" : this.rCompany,
      "sellerBrief" : this.rBrief,
      "sellerGst" : this.rGst,
      "sellerAddress" : this.rAddress,
      "sellerEmail" : this.rEmail,
      "sellerWebsite" : this.rWebsite,
      "sellerContact" : this.rContact
    }

    this.emartService.addSeller(seller).subscribe((response)=> 
      {
        seller = response;
        this.router.navigate(['/']);
      }
    );
    }
    else{
      this.checkpass = true;
      document.getElementById("rePassword").focus();
    }
  }

}
