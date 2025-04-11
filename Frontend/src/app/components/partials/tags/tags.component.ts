import { FoodService } from './../../../services/food.service';
import { Component } from '@angular/core';
import { Tag } from '../../../shared/models/tag';

@Component({
  selector: 'app-tags',
  standalone: false,
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  tags?:Tag [];
  constructor(FoodService:FoodService){
    this.tags=FoodService.getalltags();
  }
  
}
