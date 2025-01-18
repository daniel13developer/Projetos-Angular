import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  myForm: FormGroup;

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
    this.loginService.login(this.myForm.value.email, this.myForm.value.password).subscribe({
      next: () =>console.log("sucesso!"),
      error: () => console.log("error")

    })
  }

  // submit(): void {
    
  //   if (this.myForm.valid) {
  //     console.log('Form data:', this.myForm.value);
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }

  navigate(){
    // console.log("testando");
    // console.log(this.myForm.value);
    this.router.navigate(["signup"])

  } 

}
