import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { VideoPopupComponent } from '../video-popup/video-popup.component';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-intro',
  standalone: false,
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
  animations: [
    trigger('textAnimation',[
      state('hidden', style({ opacity:0, transform: 'translateX(-100%)'})),
      state('visible', style({ opacity: 1,  transform: 'translateX(0%)' })),
      transition('hidden => visible', [
        animate('2s ease-in-out')
      ]),
    ]),
    trigger('firstSVGAnimation', [
      state('initial', style({ opacity: 0, transform: 'translateX(100%)'})),
      state('visible', style({ opacity: 1, transform: 'translateX(0%)' })),
      state('hidden', style({ opacity: 0})),
      transition('initial => visible', [
        animate('2s ease-in-out'),
      ]),
      transition('visible => hidden', [
        animate('2s ease-in-out'),style({ opacity: 0.6})
      ]),
    ]),
    trigger('secondSVGAnimation', [
      state('false', style({ opacity: 1})), 
      transition('false => true', [
        animate('1s ease-in-out'),style({ opacity: 0.6})
      ]),
    ])
  ] 
})
export class IntroComponent {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  textState='hidden';
  firstSVGState= 'initial'; 
  showSecondSVG = false; 
  ishidden= false;
  constructor(private dialog: MatDialog){}
  ngOnInit(): void {
    this.activeRoute.fragment.subscribe((data) => {
      this.JumpToSection(data);
    });
    setTimeout(() => {
      this.textState = 'visible'; // Show text
      this.firstSVGState = 'visible'; // Show SVG1
    }, 0);
    setTimeout(() => {
      this.firstSVGState = 'hidden'; // Hide SVG1 after 2 seconds
      this.ishidden=true;
    }, 3000); 
  setTimeout(() => {
    this.showSecondSVG = true; // Trigger SVG2 animation after a delay
    }, 5000);
  }
  //Go to Download Section
  JumpToSection(section){
      document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
  }
  //Open Video Dialog
  openDialog() {
    const dialogRef = this.dialog.open(VideoPopupComponent, {
      maxWidth: '100%',
      width: '800px',
    });
  }
  
}
