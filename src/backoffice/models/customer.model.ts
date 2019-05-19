import { CreditCard } from './credit-card.model';
import { Address } from './address.model';
import { Pet } from './pet.models';
import { User } from './user.model';

export class Customer {
    constructor(
        public nome: string,
        public document: string,
        public email: string,
        public pets: Pet[],
        public billingAddress: Address,
        public shippingAddress: Address,
        public creditCard: CreditCard,
        public user: User,
    ) {
    }
}
