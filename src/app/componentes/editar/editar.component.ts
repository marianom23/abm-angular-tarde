import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tarea, TareaService } from 'src/app/servicios/tarea.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

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
    private router: Router
    ) { }

  ngOnInit(): void {
    this.Id += this.route.snapshot.paramMap.get('Id');
    console.log(this.Id)
    this.tareaService.getDatosId(this.Id).subscribe(
      res => {this.tareaActual=res},
      err => console.log(err),
      )
  }

  editarDatos(){
    this.tareaService.updateDatos(this.tareaActual).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/inicio']);
      },
      err => console.log(err)
    );
  }

  

}
