import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { CreateBreedDTO } from './dtos/CreateBreedDTO';
import { UpdateBreedDTO } from './dtos/UpdateBreedDTO';
import { DogBreed } from 'src/database/entities/DogBreed.entity';

@Controller('breeds')
export class BreedsController {
  constructor(private readonly breedsService: BreedsService) {}

  @Get()
  async findAll(): Promise<DogBreed[]> {
    return await this.breedsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<DogBreed> {
    return await this.breedsService.findById(id);
  }

  @Post()
  async create(@Body() data: CreateBreedDTO): Promise<void> {
    await this.breedsService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: UpdateBreedDTO,
  ): Promise<void> {
    await this.breedsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.breedsService.delete(id);
  }
}
