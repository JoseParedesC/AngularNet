import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agregar-editarcomentario',
  templateUrl: './agregar-editarcomentario.component.html',
  styleUrls: ['./agregar-editarcomentario.component.css']
})
export class AgregarEditarcomentarioComponent implements OnInit {

  constructor(fb: FormBuilder, private) { }

  comentario = 'ajajaja';

  ngOnInit(): void {
  }

}
