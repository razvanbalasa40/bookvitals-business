import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LottieModule } from 'ngx-lottie';
import { AppearDirective } from './shared/directives/appear.directive';

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, AppearDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
