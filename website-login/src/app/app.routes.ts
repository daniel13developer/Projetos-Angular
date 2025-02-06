import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

   {
      path: "home", component: HomeComponent
   },

   {
      path: "login",
      component: LoginComponent
   },

   {
      path: "signup",
      component: SignupComponent
   }

];
