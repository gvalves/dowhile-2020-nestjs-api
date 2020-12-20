import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BreedsController } from './breeds.controller';
import { BreedsService } from './breeds.service';
import { DogBreed } from 'src/database/entities/DogBreed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DogBreed])],
  controllers: [BreedsController],
  providers: [BreedsService],
})
export class BreedsModule {}
