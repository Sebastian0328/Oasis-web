import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core'
import { routes } from '../../app.routes';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-oasis',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './nav-oasis.component.html',
  styleUrl: './nav-oasis.component.scss'
})
export class NavOasisComponent {
isMenuOpen: boolean=false;
ngOnInit(){
  this.onResize();
}
toggleMenu(){
  this.isMenuOpen=!this.isMenuOpen;
}
closeMenu(){
  this.isMenuOpen=false
}
@HostListener('window:resize', ['$event'])
onResize(){
  if(window.innerWidth>=1025){
this.isMenuOpen=true
  }else{
    this.isMenuOpen=false
  }
}
}

