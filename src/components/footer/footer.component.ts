import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
  ],
})
export class FooterComponent implements OnInit {
  router = inject(Router);

  constructor() {}

  ngOnInit(): void {}

  routeToStartseite() {
    this.router.navigateByUrl('');
  }

  routeToTable() {
    this.router.navigateByUrl('tabelle');
  }

  routeToFormular() {
    this.router.navigateByUrl('formular');
  }
}
