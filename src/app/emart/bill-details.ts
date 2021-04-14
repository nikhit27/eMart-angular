import { Item } from './item';
import { Bill } from './bill';

export interface BillDetails{
    id: number,
    billId: number,
    items: Item[]
}

// export interface BillDetails{
//     billDetailsId: number,
//     BillPojo: Bill,
//     ItemPojo: Item[]
// }