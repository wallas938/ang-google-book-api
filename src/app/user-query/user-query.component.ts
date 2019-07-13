import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-user-query',
  templateUrl: './user-query.component.html',
  styleUrls: ['./user-query.component.css']
})
export class UserQueryComponent implements OnInit {

  queryForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private queryService: QueryService) { 
    this.queryForm = this.formBuilder.group({
      userQuery: ''
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.queryService.displayQuery(this.queryForm.value)
  }

}
