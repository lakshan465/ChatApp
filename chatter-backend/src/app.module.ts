import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi'
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './common/database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true,
        validationSchema: Joi.object({
          MONGODB_URI: Joi.string().required(),
        }),
      }),
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver:ApolloDriver,
        autoSchemaFile: true,
        playground: true, // ✅ enable GraphQL Playground
      }),
      DatabaseModule,
      UsersModule, // Importing the DatabaseModule to handle MongoDB connection
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 