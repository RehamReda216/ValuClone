import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { images } from '../../data/sliderData';
import { SliderData } from '../../interface/slider-data';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  images:SliderData[]= [];
  ngOnInit() {
    this.images= images;
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true, // Enables autoscrolling
    autoplayTimeout: 3000, // Duration of each autoscroll transition (in milliseconds)
    autoplayHoverPause: true, // Pauses autoscrolling on hover (optional)
    navSpeed: 600,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true
  }
}
