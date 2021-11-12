import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DocumentationService } from './documentation.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { menuData } from 'src/assets/search/menuData';


@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentationComponent implements OnInit{
  title = "Open Web Technology";
  subtitle = "Technical call live coding challenge";

  userQuery = "";
  queryField = new FormControl();

  /*results$: Observable<any>;
  readonly FIELDS = 'Type, Name, Url';*/

  constructor(private http: HttpClient, private docService: DocumentationService){}

  ngOnInit(){
    /*this.queryField.valueChanges
    .pipe(
      map(value => value.trim()),
      filter(value => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      tap(value => console.log(value)),
      switchMap(value => this.http.get(this.SEARCH_URL, {
           params:{
            search: value,
              fields: this.FIELDS
           }
      })),
    ).subscribe();*/
  }

  find(userQuery: string, content: string){
      if(userQuery.length > 0){
          return content.includes(userQuery)
      }
      return true
  }

  search(){
   /*const fields = 'Type, Name, Url';
    let value = this.queryField.value;
    if(value && (value = value.trim()) != ''){
      console.log(value)

      let params = new HttpParams();
      params = params.set('search', value);
      params = params.set('fields', fields);
 
     this.results$ = this.http
       .get(this.SEARCH_URL, {params})
       .pipe(
        map((res:any) => res.results)
      );
    }*/
  }
}
