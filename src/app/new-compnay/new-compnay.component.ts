import { companyData } from './../company-list/company-list.component';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
    companyEmail:["",[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    companyContact:["",[Validators.required,Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
  }) 
  employeeInfo: FormGroup=this.formBuilder.group({
    employeEmail:["",[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    designation:["",[Validators.required]],
    joinDate: ["",[Validators.required]],
    employeeContact:["",[Validators.required,Validators.maxLength(10)],Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
    rating:["",[Validators.required]],
    skillsInfo:this.formBuilder.array([
       this.formBuilder.group({
        skills:["",[Validators.required]],
        rating:["",[Validators.required]]
    })
    ]),
    educationInfo:this.formBuilder.array([
      this.formBuilder.group({
        collegeName:["",[Validators.required]],
        course:["",[Validators.required]],
        year:["",[Validators.required]]
    })
    ])
    
  })
  
    

  constructor(private formBuilder:FormBuilder,private router: Router){}
  ngOnInit(): void{}

  skillsInfo():FormGroup{
    return this.formBuilder.group({
        skills:["",[Validators.required]],
        rating:["",[Validators.required]]
    })
  }
 
  get skills(){
    return <FormArray>this.employeeInfo.get('skillsInfo')
  }

  addNewSkill(){
    this.skills.push( this.formBuilder.group({
      skills:["",[Validators.required]],
      rating:["",[Validators.required]]
  }))
  }

  
  saveData() {
    if(this.companyDetails.invalid && this.employeeInfo.invalid){
      this.companyDetails.markAllAsTouched();
      this.employeeInfo.markAllAsTouched();
      return
    }
    let companyData=this.companyDetails.value;
    companyData.employeeInfo=this.employeeInfo.value;
    let companies = localStorage.getItem('companyInformation');
    let companiesDetailsArray=[];
    if(companies){
      companiesDetailsArray=JSON.parse(companies);
      if(companiesDetailsArray.length){
        companiesDetailsArray.push(companyData)
        localStorage.setItem('companyInformation',JSON.stringify(companiesDetailsArray))
      }
    }
    else{
      localStorage.setItem('companyInformation',JSON.stringify([companyData]))
    }
    this.router.navigate(['company-list'])
  }
  
}



