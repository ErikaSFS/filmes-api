import { FilmesService } from './filmes.service';
import { Controller, Get, Param, Put, Query, UseGuards} from '@nestjs/common';
import { UserService } from '../usuario/user.service';
import { User } from '../usuario/user.schema';
import { AuthGuard }  from 'src/auth/auth.guard';


@Controller('filmes')
export class FilmesController {
    constructor (
        private filmesService: FilmesService,
        private userService: UserService
    ) { }

    @Get()
    async getAll() {
    return await this.filmesService.getAll();
    }

    @Get("/id/:id")
    async getById(@Param('id') id:string){
    return await this.filmesService.getById(id);
}

    @UseGuards(AuthGuard)
    @Put('/like/:id/:username')
    async likeMovie(
     @Param('id') id: string,
    @Param('username') username?: string
    ) {
        const movie = await this.filmesService.getById(id);
        movie.likes_count = movie.likes_count + 1;

        if (username) {
            const user: User = await this.userService.getByUsername(username);
            user.liked_movies.push(id);
            user.liked_movies = [... new Set(user.liked_movies.sort())];
            await this.userService.update(username, user);
          }
      
          return await this.filmesService.update(id, movie);
        }

        @UseGuards(AuthGuard)
        @Put('/removeLike/:id/:username')
        async removeLikeMovie(
          @Param('id') id: string,
          @Param('username') username?: string
        ) {
          const movie = await this.filmesService.getById(id);
          movie.likes_count = movie.likes_count == 0 ? movie.likes_count : movie.likes_count - 1;
      
          if (username) {
            const user: User = await this.userService.getByUsername(username);
            user.liked_movies = user.liked_movies.filter(m => m !== id);
            await this.userService.update(username, user);
          }
      
          return await this.filmesService.update(id, movie);
        }

