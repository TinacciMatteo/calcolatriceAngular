import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatCardModule, FormsModule, RouterOutlet, MatIconModule, MatDividerModule, MatButtonModule, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = '';
  numero: number = 0;
  segno = '';
  risultato: number = 0;

  click1 = () => {
    this.title = this.title + 1;
  }

  click2 = () => {
    this.title = this.title + 2;
  }

  click3 = () => {
    this.title = this.title + 3;
  }

  click4 = () => {
    this.title = this.title + 4;
  }

  click5 = () => {
    this.title = this.title + 5;
  }

  click6 = () => {
    this.title = this.title + 6;
  }

  click7 = () => {
    this.title = this.title + 7;
  }

  click8 = () => {
    this.title = this.title + 8;
  }

  click9 = () => {
    this.title = this.title + 9;
  }

  click0 = () => {
    this.title = this.title + 0;
  }

  clickAdd = () => {
    this.numero = parseInt(this.title);
    this.title = '';
    this.segno = 'add';
  }

  clickTogl = () => {
    this.numero = parseInt(this.title);
    this.title = '';
    this.segno = 'togl';
  }
  
  clickDivision = () => {
    this.numero = parseInt(this.title);
    this.title = '';
    this.segno = 'division';
  }

  clickMultiplication = () => {
    this.numero = parseInt(this.title);
    this.title = '';
    this.segno = 'multiplication';
  }

  clickResult = () =>{

    if(this.segno == 'add'){
      this.risultato = this.numero + parseInt(this.title);
      this.numero = this.risultato;
      this.title = this.risultato.toString();

    }else if(this.segno == 'togl'){
      this.risultato = this.numero - parseInt(this.title);
      this.numero = this.risultato;
      this.title = this.risultato.toString();

    }else if(this.segno == 'division'){
      this.risultato = this.numero / parseInt(this.title);
      this.numero = this.risultato;
      this.title = this.risultato.toString();

    }else if(this.segno == 'multiplication'){
      this.risultato = this.numero * parseInt(this.title);
      this.numero = this.risultato;
      this.title = this.risultato.toString();
    }
  }

  clickAC = () => {
    this.title = '';
    this.numero = 0;
  }

}
