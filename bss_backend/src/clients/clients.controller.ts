import { Controller, Post, Param, Put, Delete, Get, NotFoundException, ConflictException, HttpCode } from '@nestjs/common';

import { CreateClientDto } from 'src/dto/clients/create-client.dto';
import { UpdateClientDto } from 'src/dto/clients/update-client.dto';

@Controller('clients')
export class ClientsController {
    
}
