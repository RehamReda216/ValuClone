import { Component } from '@angular/core';
import { SolutionData } from '../../interface/solution-data';
import { solutions } from '../../data/solutionData';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../form-popup/popup.component';

@Component({
  selector: 'app-solutions',
  standalone: false,
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
  solutions: SolutionData[] = solutions;

  constructor(private dialog: MatDialog) {}
  ngOnInit() {
    this.solutions= this.solutions;
  }
  openDialog(){
    const dialogRef = this.dialog.open(PopupComponent,{
      height: '500px',
      width: '850px',
    });

    // Add 'dialog-open' class to body element when dialog opens (optional)
    document.body.classList.add('dialog-open');

    // Handle dialog close event
    dialogRef.afterClosed().subscribe(() => {
      document.body.classList.remove('dialog-open');
    });
  }
  
}
