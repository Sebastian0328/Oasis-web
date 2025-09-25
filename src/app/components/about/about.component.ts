import { Component } from '@angular/core';
import { CardProductComponent } from '../card-product/card-product.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardProductComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
