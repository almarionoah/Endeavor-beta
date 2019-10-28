import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'job-listing', pathMatch: 'full' },
  { path: 'job-listing', loadChildren: './job-listing/job-listing.module#JobListingPageModule' },
  { path: 'job-details/:jobID', loadChildren: './job-details/job-details.module#JobDetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
