import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img = 'data:image/jpeg;base64,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'
  constructor() { }

  ngOnInit(): void {
  }

}
