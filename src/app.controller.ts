import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { EmailDTO } from './email-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'send_email' })
  sendEmail(data: EmailDTO): string {
    this.appService.sendEmail(data);
    return 'Email enviado com sucesso!';
  }

  // @EventPattern('send_email')
  // sendEmailEvent(data: EmailDTO): void {
  //   this.appService.sendEmail(data);
  // }
}
