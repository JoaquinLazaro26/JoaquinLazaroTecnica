import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchHistory: string[] = [];

  constructor() { }

  addToHistory(searchTerm: string): void {
    this.searchHistory.unshift(searchTerm);
  }
}
