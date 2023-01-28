import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {

  constructor(private _router : Router) { }


  ngOnInit(): void {}

  ngOnInit(): void {
  }


  navigate()
  {
    this._router.navigate(['/login']);
  }

}
