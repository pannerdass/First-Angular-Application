import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/Forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
    this.authService.signUp(email,password);


  }
}
