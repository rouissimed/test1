import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';


const routes: Routes = [
{
  path:"",
  component: HomeComponent
},

{
  path:"connexion",
  component: ConnexionComponent
},

{
  path:"inscription",
  component: InscriptionComponent
},

{
  path:"list-todo",
  component: ListTodoComponent
},

{
  path:"add-todo",
  component: AddTodoComponent
},

{
  path:"update-todo",
  component: UpdateTodoComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
