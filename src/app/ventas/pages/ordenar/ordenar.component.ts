import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfase';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  pipeBoolean: boolean = true;
  ordenarValor: string = '';


  heroes: Heroe[] =[
    {
      nombre:'Super Man',
      vuela:true,
      colorPrincipal: Color.azul
    },
    {
      nombre:'Iron Man',
      vuela:true,
      colorPrincipal: Color.rojo
    },
    {
      nombre:'Hulk',
      vuela:false,
      colorPrincipal: Color.verde
    },
    {
      nombre:'Batman',
      vuela:false,
      colorPrincipal: Color.negro
    }
    
  ]

  cambiar(){

    this.pipeBoolean = !this.pipeBoolean;

  }
  ordenarPor(value: string){
    return this.ordenarValor = value;
  }

}
