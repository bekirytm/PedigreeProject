import {observable,action, configure} from 'mobx';
import { createContext } from 'react';

configure({
    enforceActions: 'observed'
})

class PersonStore{

    @observable persons = [
        {
            username: 'asd',
            email: 'asd@gmail.com',
            password: '12345',
            retry: '12345'
        }
    ]


    @action addPerson(person){
        this.persons = [...this.persons, person];
        console.log(this.persons);
    }
}


export default PersonStore = createContext(new PersonStore());