import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRep: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const existentUser = await this.userRep.findOneBy({
      email: createUserInput.email,
    });

    if (!!existentUser) {
      throw new ConflictException('User Already Exists');
    }

    const newUser = await this.userRep.create(createUserInput);

    return await this.userRep.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return await this.userRep.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRep.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return user;
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.userRep.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User Not found!');
    }
    const updatedUser = await this.userRep.merge(user, updateUserInput);
    return await this.userRep.save(updatedUser);
  }

  async remove(id: number): Promise<Boolean> {
    const user = await this.userRep.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User Not found!');
    }
    await this.userRep.softDelete({ id });
    return true;
  }
}
