import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes , RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './MaterialModule';
//paginas
import { SignupComponent } from './componets/signup/signup.component';
import { SigninComponent } from './componets/signin/signin.component';
import { HomeComponent } from './componets/home/home.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { MaterialNavComponent } from './material-nav/material-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

//rutas 
const appRoutes: Routes = [
{path:'',
component: HomeComponent
},
{path:'signup',
component: SignupComponent
},
{path:'signin',
component: SigninComponent
},
{path:'dashboar',
component: DashboardComponent
}

];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    DashboardComponent,
    MaterialNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    DemoMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
