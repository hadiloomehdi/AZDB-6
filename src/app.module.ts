import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';
import { GenreModule } from './genre/genre.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [HelloModule, UserModule, GenreModule, BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
