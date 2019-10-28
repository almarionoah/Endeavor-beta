import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.page.html',
  styleUrls: ['./job-listing.page.scss'],
})
export class JobListingPage implements OnInit {

  jobs: any;
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
    this.http.get('https://us-central1-mlab-challenge.cloudfunctions.net/jobs').subscribe((data) => {
      this.jobs = data;
      console.log(this.jobs);
    },(error) => {
      console.log(error);
    });
  }

}
