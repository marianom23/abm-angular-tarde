import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea, TareaService } from 'src/app/servicios/tarea.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  tareaNueva: Tarea={
    Id: 0,
    nombre: '',
    capital: '',
    poblacion: 0,
    superficie: 0,
    nroDepartamentos: 0,
    abreviatura: '',
    bandera: ''
  };
  constructor(private tareaService: TareaService, private router: Router) { }

  ngOnInit(): void {
  }

  postDatos(){
    this.tareaService.postDatos(this.tareaNueva).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/inicio']);
      },
      err => console.log(err)
    );
  }

}
