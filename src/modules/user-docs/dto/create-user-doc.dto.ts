// src/modules/user-docs/dto/create-user-doc.dto.ts
import { IsString, IsUUID, IsOptional, IsDateString } from 'class-validator';

export class CreateUserDocDto {
  @IsOptional()
  @IsString()
  doc_id?: string;

  @IsString()
  doc_type: string;

  @IsOptional()
  @IsString()
  doc_subtype?: string;

  @IsOptional()
  @IsString()
  issuer?: string;

  @IsOptional()
  @IsString()
  doc_data?: string;

  @IsOptional()
  @IsString()
  file?: string;
}