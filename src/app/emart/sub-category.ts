import { Category } from './category';
 
// export interface SubCategory{
//     id: number,
//     name: string,
//     categoryId: number,
//     brief: string,
//     gstPercent: number
// }





export interface SubCategory{
    subCategoryId: number,
    subCategoryName: string,
    subCategoryBrief: number,
    subCategoryGst: number,
    category: Category
}