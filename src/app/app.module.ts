import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from 'src/components/example-process-1/table/table.component';
import { FormComponent } from 'src/components/example-process-1/form/form.component';

@NgModule({
  declarations: [AppComponent, TableComponent, FormComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
