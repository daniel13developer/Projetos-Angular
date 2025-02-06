import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  imports: [
    DefaultLoginLayoutComponent,
    PrimaryInputComponent,
    ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  //constructor(private router: Router) { }

   myForm: FormGroup;
    toastService: any;
  
    constructor(
      private fb: FormBuilder, 
      private router: Router,
      private loginService: LoginService
    
    ){
      this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)]],
  
      });
  
    }

    submit(){
      console.log("submit")
    }
  
    navigate(){
      
      this.router.navigate(["signup"])
    }

}
