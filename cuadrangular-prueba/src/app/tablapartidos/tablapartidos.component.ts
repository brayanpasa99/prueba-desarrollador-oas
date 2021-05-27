import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-tablapartidos',
  templateUrl: './tablapartidos.component.html',
  styleUrls: ['./tablapartidos.component.css']
})
export class TablapartidosComponent implements OnInit {

  equipos: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getEquipos().subscribe((equipos) =>{
      this.equipos = equipos;
    })
  }

  actualizar(): void {
    
  }

}
