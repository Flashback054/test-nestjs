import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Hello } from './hello.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HelloService {
  constructor(
    @InjectRepository(Hello)
    private readonly helloRepository: Repository<Hello>,
  ) {}

  async getAllHello() {
    return await this.helloRepository.find();
  }

  async prePopulateHellos() {
    const hellos: Hello[] = [
      {
        id: 1,
        name: 'Bonjour!',
      },
      {
        id: 2,
        name: 'Hola!',
      },
      {
        id: 3,
        name: 'Ciao!',
      },
      {
        id: 4,
        name: 'Hallo!',
      },
      {
        id: 5,
        name: 'Konnichiwa!',
      },
    ];

    return await this.helloRepository.save(hellos);
  }
}
