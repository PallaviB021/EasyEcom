import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TableService } from '../table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

export interface companyData{
  companyName:string,
  companyEmail:string,
  phoneNumber:number,
  action:any;
  createdAt:any;
  delete:any;

}

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements AfterViewInit{
  displayedColumns:string[]=['companyName','companyEmail','phoneNumber','createdAt','delete'];
  dataSource=new MatTableDataSource([])
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  
  ngAfterViewInit(){
    this.dataSource.paginator=this.paginator,
    this.dataSource.sort = this.sort;
  }
  companies=[];
  constructor(private _liveAnnouncer: LiveAnnouncer) {
    let companies:any="";
    companies= localStorage.getItem('companyInformation');
    let companiesDetailsArray=JSON.parse(companies);
    if(companiesDetailsArray.length){
      this.companies=companiesDetailsArray;
      this.dataSource=new MatTableDataSource(companiesDetailsArray)
      this.dataSource.paginator=this.paginator
    }
   }
   sortCompany(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  deleteCompany(item:number){
    const data = this.dataSource.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + item, 1);
    this.dataSource.data = data;
    localStorage.setItem('companyInformation',JSON.stringify(data))
  }

}
