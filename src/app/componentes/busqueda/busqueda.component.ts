import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from 'src/app/servicios/tarea.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(
    private tareaService: TareaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  lista:any=[];  
  nombre:string="";

  ngOnInit(): void {
    this.nombre += this.route.snapshot.paramMap.get('nombre');
    console.log(this.nombre)
    this.listarTarea()
  }

    listarTarea() {
      this.tareaService.getDatosNombre(this.nombre).subscribe(
        res =>{this.lista = res},
        err =>{console.log(err)}
        )
    }

}
