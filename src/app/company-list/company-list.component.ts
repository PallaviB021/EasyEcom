import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TableService } from '../table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface companyData{
  companyName:string,
  companyEmail:string,
  phoneNumber:number,
  action:any;
}

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements AfterViewInit{
  displayedColumns:string[]=['companyName','companyEmail','phoneNumber'];
  dataSource=new MatTableDataSource([])
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  ngAfterViewInit(){
    this.dataSource.paginator=this.paginator
  }
  companies=[];
  constructor(private service:TableService) {
    let companies:any="";
    companies= localStorage.getItem('companyInformation');
    let companiesDetailsArray=JSON.parse(companies);
    if(companiesDetailsArray.length){
      this.companies=companiesDetailsArray;
      this.dataSource=new MatTableDataSource(companiesDetailsArray)
      this.dataSource.paginator=this.paginator
      console.log(this.dataSource);
      console.log(this.companies)
    }
   }
  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase()
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
  }

}
