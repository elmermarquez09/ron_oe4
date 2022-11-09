import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({providedIn: 'root'})

export class ApiService {
  headers: HttpHeaders

   constructor(public http: HttpClient) {
    this.headers = new HttpHeaders(); 
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
   }

   addStudent (data){
    return this.http.post('http://localhost/ionic_crud_appp/backend/create.php',data);
   }

}