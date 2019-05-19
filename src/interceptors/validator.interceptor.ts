import { Result } from './../backoffice/models/result.models';
import { Contract } from './../backoffice/contracts/contracts';
import { NestInterceptor, Injectable, ExecutionContext, CallHandler, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ValidatorInterceptor implements NestInterceptor {

    constructor(public contract: Contract){}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const body = context.switchToHttp().getRequest().body;
        const valid = this.contract.validate(body);
        if (!valid) {
            throw new HttpException(
                new Result('ops, algo saiu errado', false, null, this.contract.errors),
                HttpStatus.BAD_REQUEST);
        }
        return next.handle();
    }
}
