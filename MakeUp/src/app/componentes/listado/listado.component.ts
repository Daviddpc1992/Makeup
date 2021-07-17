import { Component, OnInit } from '@angular/core';
// import { NgxSpinnerService } from 'ngx-spinner';
import { ProductosService } from 'src/app/service/productos.service';
// import { Observable } from 'rxjs';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  productos: any;
  pageActual: number = 1;

  constructor(
    private productosService: ProductosService) { }
  

  ngOnInit() {
    this.productosService.getAll()
    .then(response =>{
      this.productos = response
       console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    
    
   
  }

  onChange($event:any) {
    this.productosService.getbyBrand($event)
  }

}
