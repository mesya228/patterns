import { Product } from "../interfaces/product.interface";

export class EmailAction implements Product {
    public operation(): string {
        return '{Result of the EmailAction}';
    }
}

export class PhoneAction implements Product {
    public operation(): string {
        return '{Result of the PhoneAction}';
    }
}