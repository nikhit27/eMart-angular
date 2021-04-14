import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-items',
  templateUrl: './seller-items.component.html',
  styleUrls: ['./seller-items.component.css']
})
export class SellerItemsComponent implements OnInit {
  allItems: any;
  constructor(protected emartService: EmartService, protected router: Router) { }

  ngOnInit(): void {

    if(JSON.parse(localStorage.getItem("currentSeller")).sellerId != 0){
      this.emartService.getAllSelleritems(JSON.parse(localStorage.getItem("currentSeller")).sellerId).subscribe((response)=> 
        {
          this.allItems = response;
        }
      );
    }
    else{
      this.router.navigate(['/']);
    }

  }

  addItem(){
    this.router.navigate(['/seller-add-item']);
  }

  viewItem(itemId: number){

  }

  editItem(itemId: number){

  }
}
