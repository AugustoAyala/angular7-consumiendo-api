import { Component, OnInit } from '@angular/core';
import{PersonaService} from '../servicio/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  
  agregarPersonaRegistro: any= {nombre: "", apellido: "", edad:""}
  personas: any;

  constructor(private personaService: PersonaService) {
    this.obtenerPersona();
   }

obtenerPersona(){
  this.personaService.obtenerTodasLasPersona().subscribe(resultado =>{
    this.personas = resultado;
  },
  error => {
    console.log(JSON.stringify(error));
  });
}
ngOnInit() {
}

eliminarPersona(indentificador){
  this.personaService.eliminarPersona(indentificador).subscribe(resultado =>{
    this.obtenerPersona();
  },
  error => {
    console.log(JSON.stringify(error));
  });
}
agregarPersona(){
  this.personaService.agregarPersona(this.agregarPersonaRegistro).subscribe(resultado =>{
    this.obtenerPersona();
  },
  error => {
    console.log(JSON.stringify(error));
  });
}
}
