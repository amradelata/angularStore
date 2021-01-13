import { Component, OnInit } from '@angular/core';
import { ProdactsService } from '../products.service'

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {

  public pathname;
  public prodacts = [];
  public mycategory = [];
  error = [];

  constructor(private _prodactsService: ProdactsService) { }

  ngOnInit(): void {
    this.pathname = window.location.pathname.substring(1)

    this._prodactsService.getProdacts().subscribe(
      (data) => {
        this.prodacts = data;
        let result = data.filter(obj => {
          return obj.category === this.pathname
        })
        this.mycategory = result

      },
      (err) => {

        this.error = err;
      }
    )
  }
}
