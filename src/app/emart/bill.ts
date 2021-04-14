import { Item } from './item';
import { BillDetails } from './bill-details';

export interface Bill{
    id: number,
    buyerId: number,
    type: string,
    date: string,
    remarks: string
    items: Item[],
    amount: number
}


// export interface Bill{
//     billId: number,
    
//     billType: string,
//     billDate: string,
//     billRemarks: string,
//     buyerId: number,    
//     billAmount: number,
//     billDetails: BillDetails[]
// }