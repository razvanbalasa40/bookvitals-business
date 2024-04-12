import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LottieModule } from 'ngx-lottie';
import { AppearDirective } from './shared/directives/appear.directive';
import { CareerComponent } from './career/career.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideFunctions,
  getFunctions,
  connectFunctionsEmulator,
} from '@angular/fire/functions';
import { ReactiveFormsModule } from '@angular/forms';
// import { FinancingComponent } from './financing/financing.component';

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AppearDirective,
    CareerComponent,
    // FinancingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFunctions(() => {
      const functions = getFunctions();
      // connectFunctionsEmulator(functions, 'localhost', 5001);
      return functions;
    }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
