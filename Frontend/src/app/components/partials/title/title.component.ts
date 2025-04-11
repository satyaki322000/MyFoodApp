import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: false,
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {

  constructor() { }
  @Input()
  margin?='1rem 0 1rem 0.2rem';
  @Input()
  title!:string;
  @Input()
  fontSize?='1.7rem';
  ngOnInit(): void {
  }

}
