import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter(); 
  
  @Output("submitHome") onSubmitHome = new EventEmitter();
  @Output("navigateHome") onNavigateHome = new EventEmitter();
  router: any;

  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  } 

  navigateHome() {
    //throw new Error('Method not implemented.');
    console.log('navigate');
    this.router.navigateHome(["signup"]);
  }


}
