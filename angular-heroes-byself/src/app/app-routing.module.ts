import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent }
]

@NgModule({
  // declarations: [],
  // imports: [
  //   // CommonModule
  //   RouterModule
  // ]

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}
