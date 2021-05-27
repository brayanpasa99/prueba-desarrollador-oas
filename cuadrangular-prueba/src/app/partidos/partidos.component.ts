import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css'],
})
export class PartidosComponent implements OnInit {

  partidos: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.apiService.getPartidos().subscribe((partidos) => {
      this.partidos = partidos;
      console.log(this.partidos);
    });
  }

  onSubmit(): void {
  }
}
