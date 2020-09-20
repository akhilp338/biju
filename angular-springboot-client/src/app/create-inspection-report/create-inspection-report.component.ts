import { InspectionService } from '../inspection-report.service';
import { InspectionReport } from '../inspection-report';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-inspection-report',
  templateUrl: './create-inspection-report.component.html',
  styleUrls: ['./create-inspection-report.component.css']
})
export class CreateInspectionReportComponent implements OnInit {

  inspectionReport: InspectionReport = new InspectionReport();
  submitted = false;
  
  constructor(private inspectionService: InspectionService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newInspectionReport(): void {
    this.submitted = false;
    this.inspectionReport = new InspectionReport();
  }
  save() {
    this.inspectionService
    .createInspectionReport(this.inspectionReport).subscribe(data => {
      console.log(data)
      this.inspectionReport = new InspectionReport();
      this.gotoList();
    }, 
    error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
   gotoList() {
    this.router.navigate(['/employees']);
  }

}
