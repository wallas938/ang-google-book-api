import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-query-output',
  templateUrl: './query-output.component.html',
  styleUrls: ['./query-output.component.css']
})
export class QueryOutputComponent implements OnInit {

  @Input() books

  constructor() { }

  ngOnInit() {
  }

}
