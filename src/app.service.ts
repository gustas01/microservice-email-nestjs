import { Injectable } from '@nestjs/common';
import { EmailDTO } from './email-dto';

@Injectable()
export class AppService {
  sendEmail(data: EmailDTO): void {
    //TODO: implementar envio de email
  }
}
