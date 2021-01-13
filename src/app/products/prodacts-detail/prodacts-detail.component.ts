import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdactsService } from '../products.service'


@Component({
  selector: 'app-prodacts-detail',
  templateUrl: './prodacts-detail.component.html',
  styleUrls: ['./prodacts-detail.component.css']
})
export class ProdactsDetailComponent implements OnInit {
  public prodactid;
  public singleProduct = [];
  public prodacts = [];
  public mylocalStorageCard = JSON.parse(localStorage.getItem('cart'))
  public mylocalStorageTolalPrice = JSON.parse(localStorage.getItem('totalprice'))
  public mylocalStorageQty = JSON.parse(localStorage.getItem('qty'))



  error = [];
  constructor(private _prodactsService: ProdactsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // console.log(this.mylocalStorageCard)
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.prodactid = id

    this._prodactsService.getProdacts().subscribe(
      (data) => {
        this.prodacts = data;
        let result = data.filter(obj => {
          return obj.id === this.prodactid
        })
        this.singleProduct = result




      },
      (err) => {

        this.error = err;
      }
    )

  }
  savelocalstorage() {
    // localStorage
    localStorage.setItem("totalprice", this.mylocalStorageTolalPrice);
    localStorage.setItem("qty", this.mylocalStorageQty);
    let mystringCart = JSON.stringify(this.mylocalStorageCard); //convert  my array of opject to string to save it on localStorage
    localStorage.setItem("cart", mystringCart); //set cart string
    // // localStorage
  }
  addTocrd() {
    if (
      this.mylocalStorageCard === null ||
      this.mylocalStorageCard.length === 0
    ) {
      //   if this first item in my cart
      this.mylocalStorageCard = [];
      this.singleProduct[0].quantity = 1
      this.mylocalStorageCard.push(this.singleProduct[0])
      this.mylocalStorageTolalPrice =
        +this.mylocalStorageTolalPrice + +this.singleProduct[0].price;
      this.mylocalStorageQty++;
      // savelocalStorage
      this.savelocalstorage()
      // savelocalStorage
    }
    else if (
      this.mylocalStorageCard != null &&
      this.mylocalStorageCard.length > 0
    ) {
      //if this the new item but not the first in cart
      let mystringCartFromLocalStorage = localStorage.getItem("cart"); //get my string cart from localStorage
      let myObject = JSON.parse(mystringCartFromLocalStorage); // return my sting to array of objects
      console.log(this.mylocalStorageCard);
      const findInMylocalStorageCard = this.mylocalStorageCard.find(
        //search in mylocalStorageCard array of my cliked item
        item => item.id === this.singleProduct[0].id
      );
      if (findInMylocalStorageCard != undefined) {
        //if this item in my cart. do not add it again  add to qty ++
        findInMylocalStorageCard.quantity++;
        this.mylocalStorageQty++;

        this.mylocalStorageTolalPrice =
          +this.mylocalStorageTolalPrice + +findInMylocalStorageCard.price;
        // savelocalStorage
        this.savelocalstorage()
        // savelocalStorage
      } else {
        //if i have items in my cart but state selected item not found
        this.singleProduct[0].quantity = 1; //add new key quantity = 1
        myObject.push(this.singleProduct[0]); //push this item to my local storedg cart
        this.mylocalStorageCard = myObject; //add my local storedg cart to my cart opject
        this.mylocalStorageTolalPrice =
          +this.mylocalStorageTolalPrice + +this.singleProduct[0].price;
        this.mylocalStorageQty++;
        // savelocalStorage
        this.savelocalstorage()
        // savelocalStorage
      }
    }
  }
}