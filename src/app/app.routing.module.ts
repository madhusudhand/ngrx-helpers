import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './modules/documentation/documentation.component';
import { DemosComponent } from './modules/demos/demos.component';
const routes: Routes = [
    { path: '', redirectTo: '/docs', pathMatch: 'full' },
    { path: 'docs', component: DocumentationComponent },
    { path: 'demo', component: DemosComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
