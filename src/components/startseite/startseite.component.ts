import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-startseite-component',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
  ],
})
export class StartseiteComponent implements OnInit {
  router = inject(Router);

  constructor() {}

  ngOnInit(): void {}

  routeToTable() {
    this.router.navigateByUrl('tabelle');
  }
}
