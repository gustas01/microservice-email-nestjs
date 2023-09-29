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
          queue: 'email_queue',
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
