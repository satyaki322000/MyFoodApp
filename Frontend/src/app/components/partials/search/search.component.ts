import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm:any='';
  constructor(active:ActivatedRoute,private route:Router){
    active.params.subscribe((params)=>{
      if(params){
        this.searchTerm=params.searchTerm||'';
      }
    })
  }

  search(term:String){
    if(term){
      this.route.navigateByUrl('/search/'+term);
    }
    else{
      this.route.navigateByUrl('/');
    }
  }
}
