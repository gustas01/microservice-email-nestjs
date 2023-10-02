import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
import { ClientsModule } from '@nestjs/microservices/module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.register([
      {
        name: 'EMAIL_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [`${process.env.RMQ_URL}`],
          queue: process.env.QUEUE_NAME,
          queueOptions: { durable: false },
        },
      },
    ]),
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST,
        port: +process.env.SMTP_PORT,
        auth: { user: process.env.MAILDEV_INCOMING_USER, pass: process.env.MAILDEV_INCOMING_PASS },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
