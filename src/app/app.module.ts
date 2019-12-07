import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { TablesComponent } from './tables/tables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { FormsComponent } from './forms/forms.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import {OurcommonfuncService} from './ourcommonfunc.service';
import { JsonComponent } from './json/json.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TablesComponent,
    DashboardComponent,
    ChartComponent,
    FormsComponent,
    CardComponent,
    JsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      {
         path: 'tables',
         component: TablesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
     },
     {
      path: 'charts',
      component: ChartComponent
   },
   {
    path: 'forms',
    component: FormsComponent
 },
 {
  path: 'cards',
  component: CardComponent
},
{
  path: 'json',
  component: JsonComponent
},
     {
      path:'',
      redirectTo: 'dashboard',
      pathMatch: 'full' 
    },
   ]),
  ],
  providers: [OurcommonfuncService],
  bootstrap: [AppComponent]
})
export class AppModule { }