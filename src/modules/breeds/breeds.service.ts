import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DogBreed } from 'src/database/entities/DogBreed.entity';
import { CreateBreedDTO } from './dtos/CreateBreedDTO';
import { UpdateBreedDTO } from './dtos/UpdateBreedDTO';

@Injectable()
export class BreedsService {
  constructor(
    @InjectRepository(DogBreed)
    private repository: Repository<DogBreed>,
  ) {}

  async findAll(): Promise<DogBreed[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<DogBreed> {
    return await this.repository.findOne(id);
  }

  async create(data: CreateBreedDTO): Promise<void> {
    const { name, pictureUrl } = data;
    await this.repository.insert({ name, pictureUrl });
  }

  async update(id: number, data: UpdateBreedDTO): Promise<void> {
    const { name, pictureUrl } = data;
    await this.repository.update(id, { name, pictureUrl });
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
