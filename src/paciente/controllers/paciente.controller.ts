import { Controller, Get, Post, Body, Res, HttpStatus, Delete, Query, Param } from '@nestjs/common';
import { CreatePacienteDto } from '../dtos/paciente.dto';
import { PacienteService } from '../paciente.service';

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

    @Post('/create')
    async createPost(@Res() res, @Body() createPacinteDto: CreatePacienteDto) {
        const paciente = await this.pecientService.createPacient(createPacinteDto);
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