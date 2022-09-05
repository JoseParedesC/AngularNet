import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interface/Comentario';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {

  listComentarios: Comentario[] = [
    { title: 'Angular', creator: 'Diony', created: new Date(), text: 'data' },
    { title: 'Net Core', creator: 'Jose', created: new Date(), text: 'data' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
