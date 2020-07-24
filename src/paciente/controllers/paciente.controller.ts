import { Controller, Get, Post, Body, Res, HttpStatus, Delete, Query, Param, Put } from '@nestjs/common';
import { CreatePacienteDto } from '../dtos/paciente.dto';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../interfaces/paciente.interface';

@Controller('paciente')
export class PacienteController {

    constructor(private readonly pecientService: PacienteService) { }

    @Get('/')
    async getHello(@Res() res) {
        const personas = await this.pecientService.getPacientes();
        return res.status(HttpStatus.OK).json({
            personas
        });
    }

    @Get('/:id')
    async getPacienteById(@Param('id') idPac) {
        const idPaciente = await this.pecientService.getPacientById(idPac);
        return idPaciente;
    }

    @Put('/update')
    async updatePaciente(@Res() res, @Body() createPacienteDto: CreatePacienteDto, @Query('id') idPac) {
        const updPac = await this.pecientService.updatePaciente(idPac, createPacienteDto);
        return res.status(HttpStatus.OK).json({
            updPac
        });
    }

    @Post('/create')
    async createPaciente(@Res() res, @Body() createPacinteDto: CreatePacienteDto) {
        const paciente = await this.pecientService.createPaciente(createPacinteDto);
        return res.status(HttpStatus.OK).json({
            paciente: paciente
        })
    }

    @Delete('/delete')
    async deletePaciente(@Query('idPac') id) {
        const prof = await this.pecientService.deletePaciente(id);
        return prof;
    }
}