import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  http = inject(HttpClient);
  router = inject(Router);

  loginObj = {
    "userName": 'admin',
    "password": '123'
  }

  onLogin() : void {
    if(this.loginObj["userName"] == "admin" && this.loginObj.password =="123") {
      this.router.navigateByUrl('dashboard')
    } else {
      alert("Wrong Credentials")
    }

  }

}
