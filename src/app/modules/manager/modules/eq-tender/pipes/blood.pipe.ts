import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'bloodToString'})
export class BloodPipe implements PipeTransform {
  static typesEnum: string[] = ['A_PLUS', 'A_MINUS', 'B_PLUS', 'B_MINUS', 'AB_PLUS', 'AB_MINUS', 'O_PLUS', 'O_MINUS'];
  static types: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  transform(bloodType: number): string {
    return BloodPipe.types[bloodType];
  }
}