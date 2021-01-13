import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public mylocalStorageCard = JSON.parse(localStorage.getItem('cart'))
  public mylocalStorageTolalPrice = JSON.parse(localStorage.getItem('totalprice'))
  public mylocalStorageQty = JSON.parse(localStorage.getItem('qty'))

  constructor() { }

  ngOnInit(): void {

  }

  addtoquantty(index) {
    const myclickdObject = this.mylocalStorageCard[index]
    myclickdObject[0].quantity++;
    this.mylocalStorageQty++;

    this.mylocalStorageTolalPrice =
      +this.mylocalStorageTolalPrice + +myclickdObject[0].price;
    // save localStorage
    this.savelocalstorage()
  }
  removefromquantty(index) {
    const myclickdObject = this.mylocalStorageCard[index]

    myclickdObject[0].quantity--;
    this.mylocalStorageQty--;

    this.mylocalStorageTolalPrice =
      +this.mylocalStorageTolalPrice + -myclickdObject[0].price;
    if (myclickdObject[0].quantity === 0) {
      this.mylocalStorageCard.splice(index, 1);
    }
    // save localStorage
    this.savelocalstorage()
  }
  mydelete(index) {

    const myclickdObject = this.mylocalStorageCard[index]

    this.mylocalStorageCard.splice(index, 1);


    this.mylocalStorageTolalPrice =
      +this.mylocalStorageTolalPrice + -myclickdObject[0].price * myclickdObject[0].quantity;
    this.mylocalStorageQty =
      +this.mylocalStorageQty + -myclickdObject[0].quantity;
    // save localStorage
    this.savelocalstorage()
  }

  savelocalstorage() {
    // localStorage
    localStorage.setItem("totalprice", this.mylocalStorageTolalPrice);
    localStorage.setItem("qty", this.mylocalStorageQty);
    let mystringCart = JSON.stringify(this.mylocalStorageCard); //convert  my array of opject to string to save it on localStorage
    localStorage.setItem("cart", mystringCart); //set cart string
    // // localStorage
  }

}
