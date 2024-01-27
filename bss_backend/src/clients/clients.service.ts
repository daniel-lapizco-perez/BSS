import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from 'src/schemas/clients/clients.schema';
import { CreateClientDto } from 'src/dto/clients/create-client.dto';
import { UpdateClientDto } from 'src/dto/clients/update-client.dto';

@Injectable()
export class ClientsService {
    constructor(@InjectModel(Client.name) private clientModel: Model<Client>){}

    async createClient(client: CreateClientDto){
        const newClient = await new this.clientModel(client);
        return newClient.save();
    }

    async findAllClients(){
        return await this.clientModel.find();
    }

    async findClient(id: string){
        return await this.clientModel.findById(id);
    }

    async updateClient(id: string, client: UpdateClientDto){
        return await this.clientModel.findByIdAndUpdate(id, client);
    }

    async deleteClient(id: string){
        return await this.clientModel.findByIdAndDelete(id);
    }
}
