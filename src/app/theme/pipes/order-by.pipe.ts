import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(products: Array<any>, $type, $categories){
      switch ($type) {
          case 'relevant':
              return products;
              break;
          case 'low-high':
              return _.orderBy(products, 'newPrice', 'asc');
              break;
          case 'high-low':
              return _.orderBy(products, 'newPrice', 'desc');
              break;
          case 'default':
              // return _.orderBy(products, '', '');
              return products;
              break;
          default:
              return _.orderBy(products, 'id', 'asc');
              break;
      }

  }

}
