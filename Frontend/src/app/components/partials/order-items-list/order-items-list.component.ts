import { Component, Input } from '@angular/core';
import { Order } from '../../../shared/models/order';

@Component({
  selector: 'order-items-list',
  standalone: false,
  templateUrl: './order-items-list.component.html',
  styleUrl: './order-items-list.component.css'
})
export class OrderItemsListComponent {
  @Input()
  order!:Order;
}
