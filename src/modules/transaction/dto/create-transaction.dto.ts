import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDate,
} from 'class-validator';
import {
  TransactionType,
  TransactionCategory,
  TransactionPaymentMethod,
} from '@prisma/client';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  amount: number;

  @IsEnum(TransactionType)
  type: TransactionType;

  @IsEnum(TransactionCategory)
  category: TransactionCategory;

  @IsEnum(TransactionPaymentMethod)
  paymentMethod: TransactionPaymentMethod;

  @IsDate()
  date: Date;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
