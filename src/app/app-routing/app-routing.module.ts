import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { CuerpoComponent } from '../components/cuerpo/cuerpo.component';
const routes:Routes =[
  {
    path:'cuerpo',
    component:CuerpoComponent
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule
  ]
})
export class AppRoutingModule { }
