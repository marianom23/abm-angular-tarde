import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {


  constructor(private http: HttpClient) { }

  getDatos():Observable<any>
  {
    return this.http.get('http://168.194.207.98:8081/api_provincia/get_provincias.php');
  }

  getDatosId(Id: string):Observable<any>
  {
    return this.http.get(`http://168.194.207.98:8081/api_provincia/get_provincia.php?id=${Id}`);
  }
  
  postDatos(tarea: Tarea):Observable<any>
  {
    return this.http.post('http://168.194.207.98:8081/api_provincia/post_provincia.php', tarea);
  }

  updateDatos(tarea: Tarea):Observable<any>
  {
    return this.http.put('http://168.194.207.98:8081/api_provincia/put_provincia.php',tarea);
  }

  deleteDatos(Id: string):Observable<any>
  {
    return this.http.delete('http://168.194.207.98:8081/api_provincia/delete_provincia.php?id='+Id);
  }

  getDatosNombre(nombre: string):Observable<any>
  {
    return this.http.get('http://168.194.207.98:8081/api_provincia/get_provincias.php?nombre='+nombre);
  }

}


export interface Tarea{
  Id: number;
  nombre: string;
  capital: string;
  poblacion: number;
  superficie: number;
  nroDepartamentos: number;
  abreviatura: string;
  bandera: string;
}
