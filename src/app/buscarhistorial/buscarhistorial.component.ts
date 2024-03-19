import { Component } from '@angular/core';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-buscarhistorial',
  templateUrl: './buscarhistorial.component.html',
  styleUrls: ['./buscarhistorial.component.css']
})
export class BuscarhistorialComponent {
  constructor(public searchService: SearchService) { }

  ngOnInit(): void {
  }
}
