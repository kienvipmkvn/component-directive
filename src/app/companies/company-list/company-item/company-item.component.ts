import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Company } from '../../company.model';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {
  @Input() company: Company;
  @Output() selectedCompany = new EventEmitter<Company>();
  constructor() { }

  ngOnInit(): void {
  }

  onCompanySelected(){
    this.selectedCompany.emit(this.company);
  }

}
