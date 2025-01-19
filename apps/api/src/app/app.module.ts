import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersModule } from '../users/users.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: 'password',
			database: 'school',
			entities: [__dirname + '/**/*.entity.ts'],
			synchronize: true,
			autoLoadEntities: true,
		}),
		UsersModule,
	],
	providers: [AppService],
	controllers: [AppController],
})
export class AppModule {}
