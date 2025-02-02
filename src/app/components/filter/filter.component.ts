import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from 'src/app/interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() filterChanged = new EventEmitter<IFilterOptions>();

  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  }

  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false },
  ];

  applyFilter() {
    this.filterChanged.emit({ ...this.filterOptions });
    console.log(this.filterOptions);
  }

  clearFilter(){
    this.filterChanged.emit({ ...this.filterOptions } = {} as IFilterOptions);
    console.log(this.filterOptions)
  }

}
