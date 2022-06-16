import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Tarea, TareaService } from 'src/app/servicios/tarea.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {


  Id:string="";
  tareaActual: Tarea={
    Id: 0,
    nombre: '',
    capital: '',
    poblacion: 0,
    superficie: 0,
    nroDepartamentos: 0,
    abreviatura: '',
    bandera: ''
  };

  constructor(
    private tareaService: TareaService,
    private route: ActivatedRoute,
    ) { }


  ngOnInit(): void {
    this.Id += this.route.snapshot.paramMap.get('Id');
    this.listarTarea()
  }

    listarTarea() {
      this.tareaService.getDatosId(this.Id).subscribe(
        res =>{this.tareaActual = res},
        err =>{console.log(err)}
        )
    }
  

}
