import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  nombreLower: string = 'Franco';
  nombreUpper: string = 'FRANCO';
  nombreCompleto: string = 'FrAnCO';
  
  fecha: Date = new Date();
  fechaTiempoReal: number = 0;

ngOnInit() {

  this.reloj();

}

reloj(){
  setTimeout(() => {
    
    this.fechaTiempoReal = Date.now();
    this.reloj();
    
  }, 1000);

}



}

