import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProdactsService } from '../products.service'
import { Prodact } from '../products';

@Component({
  selector: 'app-prodacts',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProdactsComponent implements OnInit {
  prodacts: Prodact[] = [];
  error = [];
  loading = false;
  constructor(private _prodactsService: ProdactsService, private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this._prodactsService.getProdacts().subscribe(
      (data) => {
        this.prodacts = data;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        this.error = err;
      }
    )
  }



}
