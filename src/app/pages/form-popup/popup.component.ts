import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { Request } from '../../interface/request';
import { ErrorStateMatcher } from '@angular/material/core';
@Component({
  selector: 'app-popup',
  standalone: false,
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  requestForm:FormGroup;
  medias= [
      'Facebook',
      'Linkedin',
      'Google',
      'Speakol',
      'Instagram',
      'Youtube',
      'Huawei',
      'Apple',
      'GDN'
  ];
  bIndusteries=[
    'Industrial Sector',
    'Agricultural Sector',
    'Healthcare and Medical Services',
    'Engineering Services',
    'Information Technology Services',
    'Services Sector',
    'Tourism',
    'Real Estate Development',
    'Consulting Services',
    'Food Services/Restaurants/Catering',
    'other'
  ];
  employeeNo=[
    '5 - 20',
    '20 - 50',
    '50 - 200',
    '>200',
    'Other'
  ];
  services=[
    'HR & Payroll system',
    'Banking & Paynas Card',
    'Medical insurance',
    'Employee Financial Benefits'
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public data,private fb:FormBuilder){
    this.requestForm= this.fb.group({
      name: new FormControl(null,[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      countryCode: new FormControl('EG (+20)'),
      phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
      how:new FormControl(this.medias[1],[Validators.required]),
      bName: new FormControl(null,[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      bIndustry: new FormControl(this.bIndusteries[8]),
      employeesNo:  new FormControl(this.employeeNo[3]),
      services: new FormControl(null),
    });
  }
  onSubmit() {
    if (this.requestForm.valid) {
      console.log(this.requestForm.value);
      console.log('Form submitted:');
    } else {
      console.error('Form is invalid');
    }
  }
}


