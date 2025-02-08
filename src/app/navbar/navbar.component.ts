import { Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

@ViewChild('nav') navElement!:ElementRef
@HostListener('window:scroll') changeHight():void{
  if(scrollY < 60){
  this.navElement.nativeElement.classList.add('py-4')
  }else{
    this.navElement.nativeElement.classList.remove('py-4')
  }
}
}
