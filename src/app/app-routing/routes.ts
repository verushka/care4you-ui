import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {AboutMe} from '../aboutMe/aboutMe.component';
import {Department1} from "../department1/department1.component";
import {Department2} from "../departement2/department2.component";
import {Department3} from "../department3/department3.component";
import {SecurityPolitics} from "../securityPolitics/securityPolitics.component";
import {SecurityEquipment} from "../securityEquipment/securityEquipment.component";
import {Incidents} from "../incidents/incidents.component";
import {ContactUs} from "../contactUs/contactUs.component";


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'aboutMe', component: AboutMe},
  {path: 'department1', component: Department1},
  {path: 'department2', component: Department2},
  {path: 'department3', component: Department3},
  {path: 'incidents', component: Incidents},
  {path: 'securityPolitics', component: SecurityPolitics},
  {path: 'securityEquipment', component: SecurityEquipment},
  {path: 'contactUs', component: ContactUs},
  {path: '**', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
