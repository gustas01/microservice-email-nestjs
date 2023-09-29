import { MailerService } from '@nestjs-modules/mailer/dist';
import { Injectable } from '@nestjs/common';
import { EmailDTO } from './email-dto';

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) {}

  sendEmail(data: EmailDTO): void {
    this.mailerService.sendMail({
      to: data.emailTo,
      subject: data.subject,
      text: data.text,
    });
  }
}
