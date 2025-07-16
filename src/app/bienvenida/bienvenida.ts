import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bienvenida.html',
  styleUrls: ['./bienvenida.css']
})
export class Bienvenida implements OnInit{
  email: string = ""
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe(params =>{console.log('params: ', params);this.email = params['CorreoValido']||''})
  }
}
