import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PartnerComponent } from './pages/partner/partner.component';
import { ProductsComponent } from './pages/products/products.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { UseComponent } from './pages/use/use.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DownloadComponent } from './pages/download/download.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { IntroComponent } from './pages/intro/intro.component';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './pages/form-popup/popup.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { VideoPopupComponent } from './pages/video-popup/video-popup.component';
import { PageNotFoundComponent } from './shared/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [AppComponent,NavbarComponent,FooterComponent,
    HomeComponent,IntroComponent, AboutComponent, PartnerComponent,
    ProductsComponent,SolutionsComponent,UseComponent,
    DownloadComponent,TabsComponent,PopupComponent,VideoPopupComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ],
})
export class AppModule { }
