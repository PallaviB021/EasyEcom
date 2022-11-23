import { Component, OnInit, ViewChild } from '@angular/core';
import { TableService } from '../table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface companyData{
  companyName:string,
  companyEmail:string,
  phoneNumber:number,
  createdAt:string,
  actions:string
}

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {
  displayedColumns:string[]=['companyName','companyEmail','phoneNumber','createdAt','actions'];
  companyDataSource!:MatTableDataSource<companyData>;
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort
  details:any;
  constructor(private service:TableService) {
    this.service.getCompanyData().subscribe((data: any)=>{
      console.log(data)
      this.details=data

      this.companyDataSource=new MatTableDataSource(this.details)
      this.companyDataSource.paginator=this.paginator
    })
   }
  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.companyDataSource.filter=filterValue.trim().toLowerCase()
    if(this.companyDataSource.paginator){
      this.companyDataSource.paginator.firstPage()
    }
  }

}
