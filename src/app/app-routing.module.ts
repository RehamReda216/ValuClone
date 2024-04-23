import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { UseComponent } from './pages/use/use.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { PartnerComponent } from './pages/partner/partner.component';
import { DownloadComponent } from './pages/download/download.component';
import { PageNotFoundComponent } from './shared/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'products',component:ProductsComponent},
  {path:'use',component:UseComponent},
  {path:'solutions',component:SolutionsComponent},
  {path:'partner',component:PartnerComponent},
  {path:'download',component:DownloadComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
