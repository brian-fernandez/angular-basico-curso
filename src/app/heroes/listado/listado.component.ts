import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent{

heroes:string[] = ['Spider','Ironman','Hulk','Thor','Capitan America'];

heroeborrado:string = ''



borrarHeroe()
{
  // this.heroes.pop();
  this.heroeborrado =   this.heroes.shift() || '';









}
}
