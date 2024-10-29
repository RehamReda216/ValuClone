import { Component } from '@angular/core';

@Component({
  selector: 'app-use',
  standalone: false,
  templateUrl: './use.component.html',
  styleUrl: './use.component.css'
})
export class UseComponent {
  tabs: string[] = ['https://www.valu.com.eg/assets/images/u.webp',
  'https://www.valu.com.eg/assets/images/sha2labaz.webp',
  'https://www.valu.com.eg/assets/images/flip.webp',
  'https://www.valu.com.eg/assets/images/akeed.webp'];

  activatedTabIndex: number =0;

  tabChange(tabIndex:number){
      this.activatedTabIndex = tabIndex;
  }
}
