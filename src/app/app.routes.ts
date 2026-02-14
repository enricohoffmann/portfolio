import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LandingComponent } from './pages/landing/landing.component';


@Component({
  template: '<div>Coming soon...</div>',
  standalone: true
})
export class EmptyComponent {}

export const routes: Routes = [
    {path: '', component: LandingComponent, pathMatch: 'full'},
    {path: '*', redirectTo: ''}
];
