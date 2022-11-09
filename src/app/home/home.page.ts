import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  student_number: any;
  student_name: any;
  email: any;
  address: any;
  contact_num: any;


  constructor(public _apiService: ApiService) {}

  //Function for creating student record
  addStudent() {
   
    let data = {
      student_number: this.student_number,
      student_name: this.student_name,
      email: this.email,
      adress: this.address,
      contact_num: this.contact_num
    }

    this._apiService.addStudent(data).subscribe((res: any) => {
      console.log("Success == ", res)
      this.student_number = '';
      this.student_name = '';
      this.email = '';
      this.address = '';
      this.contact_num = '';
      alert("SUCCESS");
    }, (error: any) => {
      alert("ERROR")
      console.log("Error = ", error)
    });
  }

}