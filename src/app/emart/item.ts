import { SubCategory } from './sub-category';
import { Seller } from './seller';
 
export interface Item{
    id: number,
    name: string,
    categoryId: number,
    subCategoryId: number,
    price: number,
    description: string,
    stock: number,
    remarks: string,
    image: string

}




 
// export interface Item{
//     itemId: number,
//     itemName: string,
//     itemImage: string,
//     itemPrice: number,
//     itemDescription: string,
//     itemRemarks: string,
//     itemStock: number,
//     seller: Seller,
//     subCategory: SubCategory
// }