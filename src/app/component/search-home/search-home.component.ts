import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrl: './search-home.component.css'
})
export class SearchHomeComponent implements OnInit{
  searchFormControl = new FormControl();
  suggestions: string[] = ['Suggestion 1', 'Suggestion 2', 'Suggestion 3'];
  recentHistory: string[] = ['History 1', 'History 2', 'History 3'];

  filteredSuggestions: Observable<string[]> | undefined;
  showSuggestions: boolean = false;
  ngOnInit() {
    this.filteredSuggestions = this.searchFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSuggestions(value))
    );
  
    this.searchFormControl.valueChanges.subscribe(value => {
      this.showSuggestions = value.length > 0;
    });
  }

  private _filterSuggestions(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.suggestions.filter(suggestion => suggestion.toLowerCase().includes(filterValue));
  }

  searchArticle() {
    const searchValue = this.searchFormControl.value;
    // Perform search logic with the provided search value
    console.log('Search value:', searchValue);
    this.showSuggestions = searchValue.length > 0;
  }
}
