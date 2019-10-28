import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.page.html',
  styleUrls: ['./job-details.page.scss'],
})
export class JobDetailsPage implements OnInit {
  route: ActivatedRoute;
  jobID: any;
  specificJob = {};
  http: HttpClient;
  constructor(route: ActivatedRoute, http: HttpClient) {
    this.route = route;
    this.http = http;
   }

  ngOnInit() {
    this.jobID = this.route.snapshot.paramMap.get('jobID');
    this.http.get('https://us-central1-mlab-challenge.cloudfunctions.net/job?id=' + this.jobID).subscribe((job) => {
      this.specificJob = job;
    }, (error) => {
      console.log(error);
    });
  }

}
