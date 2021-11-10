import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DocumentationService } from './documentation.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentationComponent implements OnInit{
  title = "Open Web Technology";
  subtitle = "Technical call live coding challenge";

  queryField = new FormControl();
  //results$: Observable<any>;


  constructor(private http: HttpClient, private docService: DocumentationService){}

  ngOnInit(){
    this.docService.getSearchJson().subscribe((data: any) => {
      console.log(data);
    });
    this.queryField.valueChanges
    .pipe(
      map(value => value.trim()),
      filter(value => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      tap(value => console.log(value)),
    ).subscribe();

  }

  search(){
    const fields = 'name, description, version, homepage';
    let value = this.queryField.value;
    if(value && (value = value.trim()) != ''){
      console.log(value)
      const params_ = {
        search: value,
        fields: fields
      };

      let params = new HttpParams();
      params = params.set('search', value);
      params = params.set('fields', fields);

      /*this.results$ = this.http
       .get(this.SEARCH_URL, {params})
       .pipe(
         map((res:any) => res.results)
       );*/
    }
  }
}
