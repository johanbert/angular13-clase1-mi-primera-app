import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  protected nombre1:string = 'el pepe';
  public edad1:number = 50;
  private cedula:number = 12312341234;

  constructor(  api:ApiService ) { }

  ngOnInit(): void {
  }

}
