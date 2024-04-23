import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private activateRoute: ActivatedRoute) {}
  ngOnInit(): void {
        this.activateRoute.fragment.subscribe((data) => {
          console.log(data);
        this.JumpToSection(data);
    });
  }
  JumpToSection(section){
      document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
  }
}
