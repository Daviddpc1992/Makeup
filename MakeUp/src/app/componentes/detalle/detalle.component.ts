import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {take,tap } from 'rxjs/operators';
import { ProductosService } from 'src/app/service/productos.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  productoId: any;

  constructor(private route: ActivatedRoute,
    private productoService: ProductosService,
    private router: Router,) {

  }

  async ngOnInit(): Promise<void>{

    this.route.params.pipe(
      take(1),
      tap(params => this.productoId = (params))
    ).subscribe()
    console.log(this.productoId.pId)

    this.productoService.getbyId(this.productoId.pId)
      .then(response => this.productoId = response)
      .catch(error => console.log(error))
      
  }


}
