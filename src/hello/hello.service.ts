import { Injectable } from '@nestjs/common';
import { PersonDto } from './dto/person.dto';

@Injectable()
export class HelloService {
    async  welcome(person:PersonDto): Promise<string> {
        let msg: string;
        if (person.year) {
            let current_year = new Date().getFullYear();
            console.log(`welcome ${person.name} - your birthday is ${person.year}`)
            msg = `welcome ${person.name} - your are ${ current_year - person.year}`
        } else{
            console.log(`welcome ${person.name} - birthday??`)
            msg = `welcome ${person.name} -no birthday :// `
        }
        return msg;
    }
}
