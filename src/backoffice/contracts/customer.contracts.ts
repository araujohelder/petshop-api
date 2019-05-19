import { Flunt } from '../../utils/flunt';
import { Customer } from './../models/customer.model';
import { Contract } from './contracts';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateCustomerContract implements Contract {
    errors: any[];
    validate(model: Customer): boolean {
        const flunt = new Flunt();

        flunt.hasMinLen(model.nome, 5, 'O nome deve ter no mínimo 5 caracteres');
        flunt.isEmail(model.email, 'E-mail invalido');
        flunt.isFixedLen(model.document, 11, 'O CPF deve possuir 11 caracteres');
        flunt.hasMinLen(model.password, 6 , 'A senha deve possuir no mínimo 6 caracteres');

        this.errors = flunt.errors;
        return this.errors.length === 0;
    }
}
