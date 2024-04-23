import { Component } from '@angular/core';
import { CardData } from '../../interface/card-data';
import { cards } from '../../data/cardData';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  animations: [
    trigger('cardAnimation', [
      transition('initial <=> rotated', [
      animate('1s ease-in-out', style({ opacity:0 ,transform: 'rotateY(180deg)' })) // Animate opacity and rotation simultaneously
      ]),
    ])
  ]
})
export class ProductsComponent {
  cards: CardData[] = [];
  ngOnInit() {
    this.cards= cards;
  }
  toggleFlip(card: CardData) {
    card.isFlipped = !card.isFlipped;
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
     '<i class="fa fa-chevron-right"></i>'
    ],
    responsive: {
      0:{
        items: 1
      },
      300: {
        items: 1
      },
      740: {
        items: 3
      },
    },
    nav: true
  }
}
