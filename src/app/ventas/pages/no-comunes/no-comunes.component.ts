import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
  nombre: string = 'Franco';
  nombre2: string = 'chota';
  nombreMostrar: string = this.nombre;

  genero: string = 'masculino';
  genero2: string = 'femenino';
  generoMostrar: string = this.genero;


  invitacionMapa = {
    masculino:'invitarlo',
    femenino:'invitarla',
  }

  //i18nPlural

  clientes: string[] =['pepito','papacho', 'pepete','elcho','tito'] ;
  clientesMapa = {
    '=0': ' no hay ningun ciente esperando.',
    '=1': 'hay un cliente esperando.',
    'other': 'hay # clientes esperando.'
  }

  cambiarPersona(){
      if(this.nombreMostrar === this.nombre){
        this.nombreMostrar = this.nombre2;
        this.generoMostrar = this.genero2;
      }else{
        this.nombreMostrar = this.nombre;
        this.generoMostrar = this.genero;
      }
  }
  eliminarClientes(){
    this.clientes.splice(0, 1);
  }

  objeto = {
    nombre:'Franco',
    apellido:'Rodriguez',
    direccion:' Pozos 1080'
  }

  heroes = [
    {
      heroe:'Iron Man',
      vuela: true
    },
    {
      heroe:'Hulk',
      vuela: false
    },
    {
      heroe:'Dr Strange',
      vuela: true
    },
  ]

  //async pipe
  miObservable = interval(2500);

  miPromise = new Promise((resolve, reject) =>{

    setTimeout(() => {
      resolve(' Data de la Promesa cargada....');
      reject('no funca la cosa');
    }, 3000);

  })

}
