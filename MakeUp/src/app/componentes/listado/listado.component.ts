import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { tap, filter } from 'rxjs/operators';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

  
export class ListadoComponent implements OnInit {
  loading: boolean;
  actorPanelOpenState = false;
  productos: any;
  pageActual: number = 1;
  ByBrand: [];
  List: string;
  


  constructor(private route: ActivatedRoute,
    private productoService: ProductosService,
    private router: Router,) {
    this.route.params.pipe(
      tap(params => this.productos = (params))
    ).subscribe()

    this.loading = true;
  
  }

  async ngOnInit() {
  
    this.productoService.getAll()
      .then(response => {
        this.productos = response;
         this.loading = false;
      })
      .catch(error => {
        console.log(error)
      })
   
       
 }

  onChange($event: any) {
    if ($event === "all") {
      this.productoService.getAll()
      .then(response => {
        this.productos = response
        this.loading = false;
      })
      .catch(error => {
        console.log(error)
      })
    } else {
      this.List = $event.target.value
      this.productoService.getByBrand(this.List)
        
      .then(response => {
        this.productos = response
        this.loading = false;
      })
      .catch(error => {
        console.log(error)
      })
   
    }
    

    
  }
  
  goToDetails(item: any) {
    setTimeout(()=>{  
      this.router.navigate(['productos/', item.id])
    }, 300);
}

}
