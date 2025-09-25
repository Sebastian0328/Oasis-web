import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardProductComponent } from '../card-product/card-product.component';
import { CardTendenciasComponent } from '../card-tendencias/card-tendencias.component';
import { TendenciasComponent } from '../tendencias/tendencias.component';
import { AboutComponent } from '../about/about.component';
import { MembersComponent } from '../members/members.component';
import { FooterComponent } from '../footer/footer.component';
import { NavOasisComponent } from "../nav-oasis/nav-oasis.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CardProductComponent, CardTendenciasComponent, TendenciasComponent, AboutComponent, MembersComponent, FooterComponent, NavOasisComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
