
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Filme, FilmesDocument } from 'src/objects/filmes/filmes.schema';



@Injectable()
export class FilmesService {
    constructor(
        @InjectModel(Filme.name) private filmesModel: Model<FilmesDocument>,
    
    ) { }

    async getAll(): Promise<Filme[]>{
        return await this.filmesModel.find().exec();
    }

    async getById(id:string) {
        return await this.filmesModel.findById(id).exec();
    }


    async create(filme: Filme) {
        const newFilme = new this.filmesModel(filme);
            return await newFilme.save();
    }


    async update(id: string, filme: Filme){
        return await this.filmesModel.findByIdAndUpdate(id, filme, {
            new: true,
        });
    }

    async delete(id: string) {
        await this.filmesModel.findByIdAndRemove(id);
    }
}