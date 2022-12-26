import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items:[
          {
            label:'textos y fechas',
            icon: 'pi pi-align-left',
            routerLink:'/'
          },
          {
            label:'Números',
            icon: 'pi pi-dollar',
            routerLink:'numeros'
          },
          {
            label:'No Comunes',
            icon: 'pi pi-globe',
            routerLink:'no-comunes'
          }],
      },
      {
        label: ' Pipes Perzonalizados',
        icon: 'pi pi-cog',
        routerLink:'odernar'
      }
  ];
  }



}
