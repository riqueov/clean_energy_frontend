import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  rotaInicio() {
    this.router.navigate(['/inicio']);
    let x = document.querySelector("#carousel");
    if (x) {
      x.scrollIntoView();
    }
  }

  rotaSobre() {
    this.router.navigate(['/sobre']);
    let x = document.querySelector("#carousel");
    if (x) {
      x.scrollIntoView();
    }
  }

  rotaProdutos() {
    this.router.navigate(['/produtos-usuario']);
    let x = document.querySelector("#carousel");
    if (x) {
      x.scrollIntoView();
    }
  }

}
