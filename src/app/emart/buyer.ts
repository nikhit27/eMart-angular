import { Bill } from './bill';

export interface Buyer{
    id: number,
    username: string,
    password: string,
    email: string,
    mobile: number,
    date: string
}



// export interface Buyer{
//     buyerId: number,
//     buyerUsername: string,
//     buyerPassword: string,
//     buyerEmail: string,
//     buyerMobile: number,
//     buyerDate: string,
//     allBills: Bill[]
// }