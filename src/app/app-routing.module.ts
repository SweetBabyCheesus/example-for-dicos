import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from 'src/components/example-process-1/form/form.component';
import { TableComponent } from 'src/components/example-process-1/table/table.component';
import { StartseiteComponent } from 'src/components/startseite/startseite.component';

const routes: Routes = [
  {
    path: '',
    component: StartseiteComponent,
  },
  {
    path: 'tabelle',
    component: TableComponent,
  },
  {
    path: 'formular',
    component: FormComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
