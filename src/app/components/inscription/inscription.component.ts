import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public registerForm: FormGroup;
  constructor(public formBuilder: FormBuilder, private userService: UserService) {

    this.registerForm = formBuilder.group(
      {
        nom: new FormControl("", [
          Validators.required,
          Validators.pattern("[a-zA-Z][a-zA-Z]+"),
        ]),
        prenom: new FormControl("", [
          Validators.required,
          Validators.pattern("[a-zA-Z][a-zA-Z]+"),
        ]),

        tel: new FormControl("", [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(13),
          Validators.pattern("[0-9]+"),
        ]),
        email: new FormControl("", [
          Validators.required,
          Validators.email,
        ]),

        password: new FormControl("", [
          Validators.required,
          Validators.minLength(8),
        ]),

        reppassword: new FormControl("", [
          Validators.required,
        ])
      }
    );


  }


  get nom() { return this.registerForm.get('nom'); }
  get prenom() { return this.registerForm.get('prenom'); }
  get tel() { return this.registerForm.get('tel'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get reppassword() { return this.registerForm.get('reppassword'); }




  ngOnInit() {
  }
  register() {
    // ici on a recuperer les data du formulaire user

    let data = this.registerForm.value;
    let user = new User(data.nom, data.prenom, data.tel, data.email, data.password);

    console.log(user);
    // la fonction subscribe prend deux param sous forme de deux fonction l'une s'ex en cas d'err et l autre en cas de success
    this.userService.registerUser(user).subscribe(

      (res) => {
        console.log("success");
      },

      (err) => {
        console.log("erreur");
      });
    // on doit envoyer le user au service

  }


}
