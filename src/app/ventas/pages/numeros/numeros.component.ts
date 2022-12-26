import { Component} from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent  {

  ventasNetas : number = 2567384.5565;
  porcentajes : number =0.48;

  subHeader: string='de este año';

}
