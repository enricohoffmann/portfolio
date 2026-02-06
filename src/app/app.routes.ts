import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';

@Component({
  template: '<div>Coming soon...</div>',
  standalone: true
})
export class EmptyComponent {}

export const routes: Routes = [
    {path: '', component: HeroComponent, pathMatch: 'full'},
    {path: 'about', component: EmptyComponent },
    {path: 'skills', component: EmptyComponent},
    {path: 'projects', component: EmptyComponent},
    {path: '*', redirectTo: ''}
];
