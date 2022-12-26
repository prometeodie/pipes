import { Pipe, PipeTransform } from '@angular/core';
import { Heroe, Color } from '../interfaces/ventas.interfase';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], param: string = 'sin valor'): Heroe[] {
    
      switch (param) {
        case 'nombre':{
          return heroes.sort((a,b) =>(a.nombre > b.nombre)? 1 : -1);
        };
        case 'vuela':{
          return heroes.sort((a,b) =>(a.vuela > b.vuela)? -1 : 1);
        };
        case 'color':{
          return heroes.sort((a,b) =>(a.colorPrincipal > b.colorPrincipal)? 1 : -1);
        }       
        default:
          return heroes;
      }

  }

}
