import { Component, HostListener, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private router: Router = inject(Router);

  public menuToggled = false;
  public burgerSrc = 'assets/img/burger-menu-icon.svg';
  public showHeader = false;

  public toptext = 'Stories With a Heartbeat.';
  public bottomTextFirst = 'We build AI-powered apps that redefine how ';
  public bottomTextSeconds =
    'the next generation of readers interact with books.';
  public topLottiePath = 'assets/lottie/machine-learning.json';
  public scrollBtnText = 'SCROLL DOWN';
  public showScroll = false;

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        switch (event.url.split('#')[0]) {
          case '/career':
            this.toptext = 'Join Our Team';
            this.bottomTextFirst = 'Unlock Your Potential';
            this.bottomTextSeconds = 'In a World of Opportunity.';
            this.topLottiePath = 'assets/lottie/career.json';
            this.scrollBtnText = 'BROWSE JOBS';
            this.showScroll = false;

            this.heroLottieOptions = {
              ...this.heroLottieOptions,
              path: this.topLottiePath,
            };
            break;
          default:
            this.toptext = 'Stories With a Heartbeat.';
            this.bottomTextFirst =
              'We build AI-powered apps that redefine how ';
            this.bottomTextSeconds =
              'the next generation of readers interact with books.';
            this.topLottiePath = 'assets/lottie/machine-learning.json';
            this.scrollBtnText = 'SCROLL DOWN';
            this.showScroll = true;

            this.heroLottieOptions = {
              ...this.heroLottieOptions,
              path: this.topLottiePath,
            };
        }
      });
  }

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

  public heroLottieOptions: AnimationOptions = {
    path: this.topLottiePath,
    loop: true,
    autoplay: true,
  };
}
