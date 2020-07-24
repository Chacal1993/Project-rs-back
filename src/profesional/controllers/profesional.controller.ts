import { Controller, Get, Res, HttpStatus, Post, Body, Query, Delete, Param, Put } from '@nestjs/common';
import { ProfesionalService } from '../profesional.service';
import { CreateProfesionalDto } from '../dtos/profesional.dto';

@Controller('profesional')
export class ProfesionalController {

    constructor(private readonly profesionalService: ProfesionalService) { }

    @Get('/')
    async getHello(@Res() res) {
        const profs = await this.profesionalService.getProfesionales();
        return res.status(HttpStatus.OK).json({
            profs
        });
    }

    @Get('/:id')
    async getProfesionalById(@Param('id') idProf) {
        const idProfesional = await this.profesionalService.getProfesionalById(idProf);
        return idProfesional;
    }

    @Post('/create')
    async createProfesional(@Res() res, @Body() createProfesionalDto: CreateProfesionalDto) {
        const prof = await this.profesionalService.createProfesional(createProfesionalDto);
        return res.status(HttpStatus.OK).json({
            prof: prof
        })
    }

    @Put('/update')
    async updateProfsional(createProfesionalDto: CreateProfesionalDto, @Query('id') idProf) {
        const updProf = this.profesionalService.createProfesional(createProfesionalDto);
        return updProf;
    }

    @Delete('/delete')
    async deleteProfesional(@Query('idProf') id) {
        const prof = await this.profesionalService.deleteProfesional(id);
        return prof;
    }

    @Delete('/delete/medicos')
    async deleteMedicos() {
        const tprof = await this.profesionalService.deleteMedicos();
        return tprof;
    }
}
