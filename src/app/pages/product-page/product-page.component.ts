import { Component } from '@angular/core';
import { NavOasisComponent } from '../../components/nav-oasis/nav-oasis.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [NavOasisComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

}
