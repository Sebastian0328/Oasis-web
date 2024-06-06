import { Component } from '@angular/core';
import { CardProductComponent } from '../card-product/card-product.component';

@Component({
  selector: 'app-tendencias',
  standalone: true,
  imports: [CardProductComponent],
  templateUrl: './tendencias.component.html',
  styleUrl: './tendencias.component.scss'
})
export class TendenciasComponent {

}
