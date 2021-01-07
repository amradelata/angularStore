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
  public singleProduct = {};
  public prodacts = [];
  error = [];
  constructor(private _prodactsService: ProdactsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
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

}