import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EspaceEtudiantComponent } from './espace-etudiant/espace-etudiant.component';
import { EspaceEnseignantComponent } from './espace-enseignant/espace-enseignant.component';
import { EspacePedagogiqueComponent } from './espace-pedagogique/espace-pedagogique.component';
import { EspaceComptabiliteComponent } from './espace-comptabilite/espace-comptabilite.component';
import { AdministrationComponent } from './administration/administration.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    EspaceEtudiantComponent,
    EspaceEnseignantComponent,
    EspacePedagogiqueComponent,
    EspaceComptabiliteComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
