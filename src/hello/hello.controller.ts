import { Controller , Post , Body , Get , Header } from '@nestjs/common';
import { HelloService} from './hello.service';
import {PersonDto} from './dto/person.dto'
import { ApiResponse, ApiBearerAuth , ApiQuery} from "@nestjs/swagger";

@Controller('hello')
export class HelloController {

    constructor(
        private readonly helloService: HelloService,
    ){}

    @ApiResponse({ status: 200, description: 'Say Hello!!!!!' })
    @Post('welcome')
    @Header('Content-type' , 'application/json')
    async sayWelcome(@Body() personDto: PersonDto): Promise<{data : string}>{
        let msg = await this.helloService.welcome(personDto);
        return {data:msg}
    }

    @ApiResponse({ status: 200 })
    @ApiQuery({
        name: 'name',
        required: true,
        type: String,
        // enum : ["All", "Browser", "Device"]
    })
    @ApiQuery({
        name: 'year',
        required: false,
        type: Number,
        description :`you can ignore this`
    })
    @Get('welcome')
    async sayWelcome2(@Body() personDto: PersonDto): Promise<{data : string}>{
        let msg = await this.helloService.welcome(personDto);
        return {data:msg}
    }
}
