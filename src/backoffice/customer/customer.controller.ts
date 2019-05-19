import { CreateCustomerContract } from './../contracts/customer.contracts';
import { ValidatorInterceptor } from './../../interceptors/validator.interceptor';
import { Result } from './../models/result.models';
import { Customer } from './../models/customer.model';
import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';

@Controller('v1/customers')
export class CustomerController {

    @Get()
    get() {
        return new Result(null, true, [], null);
    }

    @Get(':document')
    getFindById(@Param('document') document ) {
        return new Result(null, true, {}, null);
    }

    @Post()
    @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
    post(@Body() body: Customer) {
        return  new Result('Cliente criado com sucesso!', true, body, null);
    }

    @Put(':document')
    put(@Param('document')document, @Body() body) {
        return new Result('Cliente alterado com sucesso!', true, body, null);
    }

    @Delete(':document')
    delete(@Param('document')document) {
        return new Result('Cliente removido com sucesso!', true, null, null);
    }
}
