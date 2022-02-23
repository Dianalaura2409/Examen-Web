import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { lista } from 'src/app/interface/lista.interface';


@Component({
  selector: 'cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent{

  formulario = this.nuevoFormulario.group({
    nombre:'',
    apellido:'',
    edad:'',
    fechanacimiento:'',
    domicilio:'',
    telefono:'',
    correo:''
});
listado:lista[]=[];

    constructor(private nuevoFormulario:FormBuilder){
    }
    GUARDARUSUARIO(){
      let nuevalista : lista = {
          nombre :this.formulario.get('nombre')?.value,
          apellido:this.formulario.get('apellido')?.value,
          edad:this.formulario.get('edad')?.value,
          fechanacimiento:this.formulario.get('fechanacimiento')?.value,
          domicilio:this.formulario.get('domicilio')?.value,
          telefono:this.formulario.get('telefono')?.value, 
          correo:this.formulario.get('correo')?.value
      }
  

      this.listado.push(nuevalista);//PONER EN ARRAY

      console.log(this.listado);
      this.limpiarForm();
}


limpiarForm(){
      this.formulario.reset()
  }

}