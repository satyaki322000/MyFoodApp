import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mot-found',
  standalone: false,
  templateUrl: './mot-found.component.html',
  styleUrl: './mot-found.component.css'
})
export class MotFoundComponent {
@Input()
visible=false;
@Input()
notFoundMessage="No results found";
@Input()
resetLinkText="Reset";
@Input()
resetLinkRoute="/";
}
