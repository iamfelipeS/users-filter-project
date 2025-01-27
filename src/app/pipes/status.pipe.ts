import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    const INVALID_STATUS = status === null || status === undefined;
    if (INVALID_STATUS) {
      return 'Indisponível ou inválido';
      
    }
    return status ? 'Ativo' : 'Inativo';
  }

}
