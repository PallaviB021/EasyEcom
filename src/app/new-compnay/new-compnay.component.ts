import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-compnay',
  templateUrl: './new-compnay.component.html',
  styleUrls: ['./new-compnay.component.css']
})
export class NewCompnayComponent implements OnInit {
  designations:any=["Developer","Manager","System Admin","Technical Lead","PM"];
  startDate: Date = new Date();
  skillSet = ['Java', 'Angular', 'CSS', 'HTML', 'JavaScript', 'UI', 'SQL', 'React', 'PHP',
    'GIT', 'AWS', 'Python', 'Django', 'C', 'C++', 'C#', 'Unity', 'R', 'AI', 'NLP',
    'Photoshop', 'Nodejs'];
    
  rating=[1,2,3,4,5]
  companyDetails: FormGroup =this.formBuilder.group({
    companyName:["",[Validators.required,Validators.maxLength(300)]],
    companyAddress:[""],
    companyEmail:["",[Validators.required,Validators.email,Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    companyContact:["",[Validators.required,Validators.maxLength(15)]],
    employeeInfo: this.formBuilder.group({
      employeEmail:["",[Validators.required,Validators.email,Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      designation:["",[Validators.required]],
      joinDate: [this.startDate,[Validators.required]],
      employeeContact:["",[Validators.required,Validators.maxLength(15)]],
      rating:["",[Validators.required]],
      skillsInfo:this.formBuilder.group({
        skills:["",[Validators.required]],
        rating:["",[Validators.required]]
      })
      
    }),
    
    
  })
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void{
    
  }

  saveData() {

    if(this.companyDetails.invalid){
      this.companyDetails.markAllAsTouched();
      return
    }
    let companies = localStorage.setItem('companyDetails','companies');
    if(this.companyDetails) {
      let res=localStorage.getItem('companyDetails')
      console.log(res);
    }
    console.log(this.companyDetails.value);
  }
 
}

