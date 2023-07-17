
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilmesSchema} from './filmes.schema';
import { FilmesService } from './filmes.service';
import { FilmesController} from './filmes.controller';


@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Filme',
                schema: FilmesSchema,
                collection: 'Filmes',
            },
        ]),
    ],
    providers: [ FilmesService],
    exports: [ FilmesService],
    controllers: [ FilmesController],
})
export class FilmesModule {}