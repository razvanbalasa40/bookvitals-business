import { Component, HostListener, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public menuToggled = false;
  public burgerSrc = 'assets/img/burger-menu-icon.svg';
  public showHeader = false;

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    this.showHeader = window.pageYOffset >= window.innerHeight;
  }

  toggleMenu() {
    if (window.innerWidth <= 768) {
      this.menuToggled = !this.menuToggled;
      if (this.menuToggled) {
        this.burgerSrc = 'assets/img/close-menu-icon.svg';
        document.body.style.height = '100vh';
        document.body.style.width = '100vw';
        document.body.style.overflow = 'hidden';
      } else {
        this.burgerSrc = 'assets/img/burger-menu-icon.svg';
        document.body.style.height = 'initial';
        document.body.style.width = 'initial';
        document.body.style.overflow = 'initial';
      }
    }
  }
}
