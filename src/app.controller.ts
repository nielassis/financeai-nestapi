import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ClerkAuthGuard } from './clerk-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @UseGuards(ClerkAuthGuard)
  async getUserId(@Param('userId') userId: string) {
    if (!userId) {
      throw new NotFoundException('User ID is required');
    }
    return this.appService.getUserId(userId);
  }
}
