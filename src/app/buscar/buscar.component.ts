import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  searchTerm: string = '';
  gifs: any[] = [];

  constructor(private http: HttpClient, private searchService: SearchService) { } 

  ngOnInit(): void {
  }

  searchGifs(): void {
    if (this.searchTerm.trim() === '') {
      return;
    }

    const apiKey = 'n5l28yKsbnRHm4Az6QszKuDsGwLCoPX0';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${this.searchTerm}&limit=20`;

    this.http.get(url).subscribe((response: any) => {
      this.gifs = response.data;
      this.searchService.addToHistory(this.searchTerm);
    });
  }
}
