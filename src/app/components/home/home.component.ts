import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardProductComponent } from '../card-product/card-product.component';
import { CardTendenciasComponent } from '../card-tendencias/card-tendencias.component';
import { TendenciasComponent } from '../tendencias/tendencias.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,CardProductComponent,CardTendenciasComponent,TendenciasComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
