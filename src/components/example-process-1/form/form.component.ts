import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Process1Facade } from 'src/libs/facades/process-1.facade';
import {
  DragDropDirective,
  FileHandle,
} from './../../../libs/directives/drag-and-drop.directive';
import { DragAndDropComponent } from '../../../libs/directives/drag-and-drop.component';

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    DragDropDirective,
    DragAndDropComponent,
  ],
})
export class FormComponent implements OnInit {
  router = inject(Router);
  #process1Facade = inject(Process1Facade);

  adresseFormGroup = new FormGroup({
    nachname: new FormControl('', Validators.required),
    vorname: new FormControl('', Validators.required),
    geburtsdatum: new FormControl('', [Validators.required]),
    geburtsort: new FormControl('', Validators.required),
    strasse: new FormControl('', Validators.required),
    hausnummer: new FormControl('', Validators.required),
    plz: new FormControl('', Validators.required),
    ort: new FormControl('', Validators.required),
  });

  dokumenteFormGroup = new FormGroup({
    upload1: new FormControl(''),
    upload2: new FormControl(''),
  });

  nachrichtFormGroup = new FormGroup({
    nachricht: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  clearForm() {
    this.adresseFormGroup.reset();
    this.dokumenteFormGroup.reset();
    this.nachrichtFormGroup.reset();
  }

  send() {
    this.#process1Facade.sendFormData();
  }

  fileChangeEvent(event: Event, field: string): void {
    const target = event.target as HTMLInputElement;
    let name: string = (target.files as FileList)[0].name;
    this.dokumenteFormGroup.get(field)?.patchValue(name);
  }

  fileChangeDragDropEvent(event: FileHandle[], field: string): void {
    const name = event[0].file.name;
    this.dokumenteFormGroup.get(field)?.patchValue(name);
  }

  deleteFile(field: string) {
    this.dokumenteFormGroup.get(field)?.patchValue('');
  }
}
