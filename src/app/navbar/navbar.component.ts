import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  isExpanded = true;

  ngOnInit(): void {
    const value = localStorage.getItem('isExpanded');

    this.isExpanded = value === 'true';
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;

    localStorage.setItem('isExpanded', JSON.stringify(this.isExpanded));
  }
}
