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
import { DragDropDirective, FileHandle } from './../../../libs/directives/drag-and-drop.directive';
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

  adresse = new FormGroup({
    nachname: new FormControl('', Validators.required),
    vorname: new FormControl('', Validators.required),
    geburtsdatum: new FormControl('', [Validators.required]),
    geburtsort: new FormControl('', Validators.required),
    strasse: new FormControl('', Validators.required),
    hausnummer: new FormControl('', Validators.required),
    plz: new FormControl('', Validators.required),
    ort: new FormControl('', Validators.required),
  });

  dokumente = new FormGroup({
    upload1: new FormControl(''),
    upload2: new FormControl('')
  });

  constructor() {}

  ngOnInit(): void {}

  clearForm() {
    this.adresse.reset();
  }

  send() {
    this.#process1Facade.sendFormData();
  }

  fileChangeEvent(event: Event): void {
    const target = event.target as HTMLInputElement;
    let name: string = (target.files as FileList)[0].name;
    this.dokumente.get('upload1')?.patchValue(name);
  }

  fileChangeDragDropEvent(event: FileHandle[]): void {
    const name = event[0].file.name
    this.dokumente.get('upload1')?.patchValue(name);
  }

  deleteFile() {
    this.dokumente.get('upload1')?.patchValue('');
  }
}
