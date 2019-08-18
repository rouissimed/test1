import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  registerUser(user : User){

    // envoie user au web service situe a cette url affecter au variable urlws
    let urlws = "http://localhost:3000/user/register";
    let datafromws = this.http.post<any>(urlws,user); // permet d envoyer l objet user a cet url - dataformws contient l objet retourne par le web service enregistrer dans le bd
    return datafromws ;
  }

}
