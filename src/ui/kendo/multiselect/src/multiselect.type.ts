import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@ngx-formly/kendo/form-field';
import { FormlyFieldSelectProps } from '@ngx-formly/core/select';

interface MultiSelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
  primitive?: boolean;
  filterable: boolean;
  minFilter: number;
  filterOperator: string;
  filter: (field: string, operator: string, value: any) => void;
}

export interface FormlySelectFieldConfig extends FormlyFieldConfig<MultiSelectProps> {
  type: 'multiselect' | Type<FormlyFieldMultiSelect>;
}

@Component({
  selector: 'formly-field-kendo-multiselect',
  template: `
    <kendo-multiselect
      [formControl]="formControl"
      [formlyAttributes]="field"
      [data]="props.options | formlySelectOptions : field | async"
      [textField]="'label'"
      [valueField]="'value'"
      [valuePrimitive]="props.primitive ?? true"
      [filterable]="props.filterable"
      (filterChange)="handleFilter($event)"
      (valueChange)="props.change && props.change(field, $event)"
    >
    </kendo-multiselect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldMultiSelect extends FieldType<FieldTypeConfig<MultiSelectProps>> {

  handleFilter(value: any) {
    if (value.length >= this.props.minFilter) {
      this.field.props?.filter(
        "label",
        this.props.filterOperator,
        value
      );
    }
  }
}
