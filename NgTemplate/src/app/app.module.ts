import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//boostrap
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';

//shared
import { MenuSuperiorComponent } from './shared/menu-superior/menu-superior.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainPrincipalComponent } from './shared/main-principal/main-principal.component';

//componentees
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    FooterComponent,
    MainPrincipalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(), //utiliza o forRoot para que o componente entenda que se trata do modulo raiz
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
