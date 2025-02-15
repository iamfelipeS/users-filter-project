import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const INVALID_ADDRESS = 
      !address || 
      !address.street || 
      !address.city || 
      !address.state || 
      !address.country ||
      !address.number === null || address.number === undefined; 

    if (INVALID_ADDRESS) {
      return '-';
    }
    return `${address.street}, ${address.number} - ${address.city} - ${address.state}`;
  }

}
