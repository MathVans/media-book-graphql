import { ArgumentsHost, Catch, NotFoundException } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

@Catch(NotFoundException)
export class EntityNotFoundFilter<T> implements GqlExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    GqlArgumentsHost.create(host);
    // return exception;
    return new GraphQLError(exception.message, {
      extensions: { code: 'ENTITY_NOT_FOUND', status: 404 },
    });
  }
}
