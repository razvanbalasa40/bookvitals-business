import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  inject,
} from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('products') productsSection: ElementRef;
  @ViewChild('teams') teamsSection: ElementRef;
  @ViewChild('contact') contactSection: ElementRef;
  @ViewChild('mission') missionSection: ElementRef;

  private viewportScroller: ViewportScroller = inject(ViewportScroller);

  public galleryScrollPercent = -8.8;
  public formScrollPercent = -10;
  public blobScrollPercent = 8;
  public router: Router = inject(Router);
  public showProducts = false;
  public menuToggled = false;
  public burgerSrc = 'assets/img/burger-menu-icon.svg';

  public leftLottieOptions: AnimationOptions = {
    path: 'assets/lottie/heartbeat-ecg.json',
    loop: true,
  };

  public rightLottieOptions: AnimationOptions = {
    path: 'assets/lottie/heartbeat-ecg.json',
    loop: true,
    autoplay: false,
  };

  public pulseLottieOptions: AnimationOptions = {
    path: 'assets/lottie/pulse.json',
    loop: true,
    autoplay: true,
  };

  public heroLottieOptions: AnimationOptions = {
    path: 'assets/lottie/ai-reading-book.json',
    loop: true,
    autoplay: true,
  };

  public portraitsTop = [
    {
      image: 'Laurentiu.webp',
      name: 'Laurențiu Bălașa',
      occupation: 'CEO',
    },
    {
      image: 'Marius.webp',
      name: 'Marius Iordache',
      occupation: 'Programmer',
    },
    {
      image: 'Razvan.webp',
      name: 'Răzvan Bălașa',
      occupation: 'Programmer',
    },
    {
      image: 'Mariusica.webp',
      name: 'Marius Stancu',
      occupation: 'Marketing Expert',
    },
    {
      image: 'Andreea.webp',
      name: 'Andreea Trandafir',
      occupation: 'Marketing Expert',
    },
  ];

  public portraitsBottom = [
    {
      image: 'Irina.webp',
      name: 'Irina',
      occupation: 'UX/UI',
    },
    {
      image: 'Otilia.webp',
      name: 'Otilia Bărbat',
      occupation: 'UX/UI & Graphic Designer',
    },
    {
      image: 'Cristina.webp',
      name: 'Cristina Lupu',
      occupation: 'ASO Manager',
    },
    {
      image: 'Lidia.webp',
      name: 'Lidia Dajicu',
      occupation: 'HR Operations Officer',
    },
  ];

  public allPortraits = [...this.portraitsTop, ...this.portraitsBottom];

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

  scrollToElement(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    if (
      this.productsSection.nativeElement.getBoundingClientRect().bottom >= 0
    ) {
      this.showProducts = true;
    }

    if (
      this.teamsSection.nativeElement.getBoundingClientRect().top <= 650 &&
      this.teamsSection.nativeElement.getBoundingClientRect().top >= -450
    ) {
      if (window.innerWidth >= 1600) {
        this.galleryScrollPercent =
          this.teamsSection.nativeElement.getBoundingClientRect().top / 8 - 90;
      } else {
        this.galleryScrollPercent =
          this.teamsSection.nativeElement.getBoundingClientRect().top / 9 - 120;
      }
    }

    if (
      this.contactSection.nativeElement.getBoundingClientRect().top <= 400 &&
      this.contactSection.nativeElement.getBoundingClientRect().top >= 0
    ) {
      this.formScrollPercent =
        this.teamsSection.nativeElement.getBoundingClientRect().top / 8 + 70;
    }

    if (
      this.missionSection.nativeElement.getBoundingClientRect().bottom <=
        1800 &&
      this.missionSection.nativeElement.getBoundingClientRect().bottom >= 0
    ) {
      this.blobScrollPercent =
        this.missionSection.nativeElement.getBoundingClientRect().top / 9 - 40;
    }
  }

  goToWebsite(site) {
    window.location.href = site;
  }

  doNothing(event) {
    event.stopPropagation();
  }
}
