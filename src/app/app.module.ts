import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './carousel.component/carousel.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {FooterComponent} from './footer/footer.component';
import {AboutMe} from "./aboutMe/aboutMe.component";
import {Department1} from "./department1/department1.component";
import {Department2} from "./departement2/department2.component";
import {Department3} from "./department3/department3.component";
import {Incidents} from "./incidents/incidents.component";
import {SecurityEquipment} from "./securityEquipment/securityEquipment.component";
import {SecurityPolitics} from "./securityPolitics/securityPolitics.component";
import {ContactUs} from "./contactUs/contactUs.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    AboutMe,
    Department1,
    Department2,
    Department3,
    Incidents,
    SecurityEquipment,
    SecurityPolitics,
    ContactUs

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    CardModule,
    ButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
