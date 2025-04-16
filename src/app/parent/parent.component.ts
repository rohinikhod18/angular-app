import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent {

  fruits: string[] = ['Apple', 'Banana', 'Cherry', 'Mango'];

  isTrue=false;
  userName :string="Raj patil"
}
