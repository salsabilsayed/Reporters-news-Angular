import { Component, OnInit } from '@angular/core';
import { Reporter } from 'src/app/interfaces/reporterModel';
import { ReporterService } from 'src/app/services/reporter.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private reporterService:ReporterService) { }

  reporter:Reporter = {}

  getProfile(){
    this.reporterService.getProfile().subscribe(
      {
        next:(res)=>{
          this.reporter = res
          console.log(res);
          
        }
      }
    )
  }

  ngOnInit(): void {
    this.getProfile()
  }

}
