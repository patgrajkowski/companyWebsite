import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'strona-glowna', component: HomePageComponent },
  { path: '', redirectTo: '/strona-glowna', pathMatch: 'full' },
  { path: 'o-nas', component: FaqComponent },
  { path: 'oferta', component: ServicesComponent },
  { path: 'kontakt', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
