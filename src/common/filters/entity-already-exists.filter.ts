import {
  ArgumentsHost,
  Catch,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

@Catch(ConflictException)
export class EntityAlreadyExistsFilter<T> implements GqlExceptionFilter {
  catch(exception: ConflictException, host: ArgumentsHost) {
    // It's possible to let the nestjs handle the http exception in reponse
    // return exception;
    return new GraphQLError(exception.message, {
      extensions: { code: 'ENTITY_ALREADY_EXISTS', status: 409 },
    });
  }
}
