

import { FilmesService } from './filmes.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Filmes } from './filme.schema';



@Controller('filmes')
export class FilmesController {
    constructor (private filmesService: filmesService) { }

@Get()
async getAll() {
    return await this.filmesService.getAll();
}

@Get("/id/:id")
async getById(@Param('id') id:string){
return await this.filmesService.getById(id);
}

@Post('/create')
async createFilme(@Body() filme: Filme) {
    const newFilme = await this.filmesService.create(filme);
    return newFilme;
}

@Put('/update/:id')
async updateFilme(
    @Param('id') id: string,
    @Body() filme: Filme,
    ) {

    } return await this.filmesService.update(id, filme);

    @Delete('/delete/:id')
    async deleteFilme(@Param('id') id:string){
      await this.filmesService.delete(id);
    }
}

