import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core'

@Component({
  selector: 'app-nav-oasis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-oasis.component.html',
  styleUrl: './nav-oasis.component.scss'
})
export class NavOasisComponent {
isMenuOpen: boolean=false
toggleMenu(){
  this.isMenuOpen=!this.isMenuOpen;
}
closeMenu(){
  this.isMenuOpen=false
}
@HostListener('window:resize', ['$event'])
onResize(){
  if(window.innerWidth>=1020){
this.isMenuOpen=true
  }else{
    this.isMenuOpen=false
  }
}
}

