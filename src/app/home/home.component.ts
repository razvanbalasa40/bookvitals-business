import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import {} from 'googlemaps';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Functions, httpsCallable } from '@angular/fire/functions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnInit {
  private functions: Functions = inject(Functions);

  @ViewChild('products') productsSection: ElementRef;
  @ViewChild('teams') teamsSection: ElementRef;
  // @ViewChild('email') contactSection: ElementRef;
  @ViewChild('mission') missionSection: ElementRef;
  @ViewChild('map', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 44.48503127498458;
  lng = 26.09917951513703;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 15,
    mapTypeId: 'roadmap',
  };
  marker = new google.maps.Marker({
    position: this.coordinates,
    // map: this.map,
  });

  public contactForm: FormGroup;
  private builder: FormBuilder = inject(FormBuilder);

  private viewportScroller: ViewportScroller = inject(ViewportScroller);

  public galleryScrollPercent = -8.8;
  public formScrollPercent = -10;
  public blobScrollPercent = 8;
  public router: Router = inject(Router);
  public showProducts = false;
  public menuToggled = false;
  public burgerSrc = 'assets/img/burger-menu-icon.svg';
  public sending = false;
  public sentMessage = false;

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

  public lottieSendingOptions: AnimationOptions = {
    path: 'assets/lottie/sending-message.json',
    loop: false,
  };

  public portraitsTop = [
    {
      image: 'Laurentiu.webp',
      name: 'Laurențiu Bălașa',
      occupation: 'CEO, Founder',
    },
    {
      image: 'Marius.webp',
      name: 'Marius Iordache',
      occupation: 'CTO, Co-Founder',
    },
    {
      image: 'Cristina.webp',
      name: 'Cristina Lupu',
      occupation: 'ASO Manager',
    },
    {
      image: 'Razvan.webp',
      name: 'Răzvan Bălașa',
      occupation: 'Full-Stack Web Developer',
    },

    // {
    //   image: 'Andreea.webp',
    //   name: 'Andreea Trandafir',
    //   occupation: 'Marketing Expert',
    // },
  ];

  public portraitsBottom = [
    // {
    //   image: 'Irina.webp',
    //   name: 'Irina',
    //   occupation: 'UX/UI',
    // },
    {
      image: 'Otilia.webp',
      name: 'Otilia Bărbat',
      occupation: 'UX/UI & Graphic Designer',
    },
    {
      image: 'Mariusica.webp',
      name: 'Marius Stancu',
      occupation: 'Marketing Expert',
    },
    {
      image: 'Lidia.webp',
      name: 'Lidia Dajicu',
      occupation: 'HR Operations Officer',
    },
  ];

  public allPortraits = [...this.portraitsTop, ...this.portraitsBottom];

  public contactIcons = [
    {
      iconPath: 'assets/img/contact/email.svg',
      iconAlt: 'Email Icon',
      text: 'hello@bookvitals.com',
    },
    {
      iconPath: 'assets/img/contact/location.svg',
      iconAlt: 'Location Icon',
      text: 'Siriului 22-26, Bucharest, Romania',
    },
    {
      iconPath: 'assets/img/contact/phone.svg',
      iconAlt: 'Phone Icon',
      text: '+40 734 418 514',
    },
  ];

  ngOnInit(): void {
    this.contactForm = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Subject: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required]),
    });
  }

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
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

    // if (
    //   this.contactSection.nativeElement.getBoundingClientRect().top <= 400 &&
    //   this.contactSection.nativeElement.getBoundingClientRect().top >= 0
    // ) {
    //   this.formScrollPercent =
    //     this.teamsSection.nativeElement.getBoundingClientRect().top / 8 + 70;
    // }

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

  onSubmit() {
    this.sentMessage = true;
    this.sending = true;

    httpsCallable(
      this.functions,
      'sendFeedbackMailOnCall'
    )({
      from: this.contactForm.value.Email,
      replyTo: this.contactForm.value.Email,
      username: this.contactForm.value.Name,
      originalSubject: this.contactForm.value.Subject,
      originalMessage: this.contactForm.value.Message,
    })
      .then(() => {
        setTimeout(() => {
          this.sending = false;
        }, 2000);
      })
      .catch((error) => {
        // console.log(error);
      });
  }
}
