import { IProductCategory } from 'app/shared/model/product-category.model';
import { Size } from 'app/shared/model/enumerations/size.model';
import { Rating } from 'app/shared/model/enumerations/rating.model';

export interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  size?: Size;
  imageContentType?: string;
  image?: any;
  recommended?: Rating;
  productCategory?: IProductCategory;
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public price?: number,
    public size?: Size,
    public imageContentType?: string,
    public image?: any,
    public recommended?: Rating,
    public productCategory?: IProductCategory
  ) {}
}
