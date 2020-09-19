import {observable,action, configure} from 'mobx';
import { createContext } from 'react';

// configure({
//     enforceActions: 'observed'
// })

class PersonStore{
    @observable name = 'Bekir';

    @observable persons = [
        {
            username: 'asd',
            email: 'asd@gmail.com',
            password: '12345',
            retry: '12345'
        }
    ]

    @action changeName(){
        if(this.name === 'Bekir'){
            this.name = "AHMET"
        }else{
            this.name = 'Bekir'
        }
    }

    @action addAnimal(person){
        this.persons = [...this.persons, person];
        console.log(this.persons);
    }
}


export default PersonStore = createContext(new PersonStore());