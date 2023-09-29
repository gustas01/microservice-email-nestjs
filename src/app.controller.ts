import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { EmailDTO } from './email-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'send_email' })
  sendEmail(data: EmailDTO): void {
    return this.appService.sendEmail(data);
  }

  // @EventPattern('send_email')
  // sendEmailEvent(data: any): void {
  //   console.log('do EventPattern');
  //   console.log(data);
  //   this.appService.sendEmail();
  // }
}
