import { IsEmail, IsNotEmpty } from 'class-validator';

export class EmailDTO {
  @IsNotEmpty()
  @IsEmail()
  emailFrom: string;

  @IsEmail()
  @IsNotEmpty()
  emailTo: string;

  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  text: string;
}
