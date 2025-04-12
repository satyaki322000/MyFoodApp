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
  tags?:Tag[];
  constructor(foodService:FoodService) {
    foodService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
   }

  ngOnInit(): void {
  }

}
