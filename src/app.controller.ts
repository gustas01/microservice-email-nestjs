import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { EmailDTO } from './email-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @MessagePattern('send_email')
  // sendEmail(@Payload() data: EmailDTO): string {
  //   this.appService.sendEmail(data);
  //   return 'Email enviado com sucesso!';
  // }

  @EventPattern('send_email')
  sendEmailEvent(data: EmailDTO): void {
    this.appService.sendEmail(data);
  }
}
