import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {

  @Input() nombreeq1: string = '';
  @Input() nombreeq2: string = '';
  @Input() idpartido: string = '';
  @Input() goleq1: string = '';
  @Input() goleq2: string = '';

  generagoles(): void {
    this.goleq1 = (Math.floor(Math.random()*(5))).toPrecision();
    this.goleq2 = (Math.floor(Math.random()*(5))).toString();
    this.apiService.setPartido(this.idpartido.toString(), this.goleq1, this.goleq2).subscribe((res) => {
      console.log(res);
    });
  }

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

}
