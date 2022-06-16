import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/servicios/tarea.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  lista:any=[];
  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.listarTareas()
  }

  listarTareas()
  {
    this.tareaService.getDatos().subscribe(
      res =>{this.lista = res},
      err =>{console.log(err)}
    );
  }

  eliminar(id:string){
    this.tareaService.deleteDatos(id).subscribe(
      res => {this.ngOnInit()},
      err => console.log(err)
    )
  }

}
