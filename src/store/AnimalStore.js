import {observable,action, configure} from 'mobx';
import { createContext } from 'react';


configure({
    enforceActions: 'observed'
})

class AnimalStore{
    @observable animals = [
        {
            nickname: 'testCow',
            id: 1123,
            birthday: '12/10/19',
            gender: 'male/female',
            mother: 'motherTest',
            father: 'fatherTest',
            image: 'image'
        },
        {
            nickname: 'testCow',
            id: 342340,
            birthday: '12/10/19',
            gender: 'male/female',
            mother: 'motherTest',
            father: 'fatherTest',
            image: 'image'
        },
        {
            nickname: 'testCow',
            id: 2342340,
            birthday: '12/10/19',
            gender: 'male/female',
            mother: 'motherTest',
            father: 'fatherTest',
            image: 'image'
        },
        {
            nickname: 'testCow',
            id: 3454350,
            birthday: '12/10/19',
            gender: 'male/female',
            mother: 'motherTest',
            father: 'fatherTest',
            image: 'image'
        },
        {
            nickname: 'testCow',
            id: 3460,
            birthday: '12/10/19',
            gender: 'male/female',
            mother: 'motherTest',
            father: 'fatherTest',
            image: 'image'
        },
        {
            nickname: 'testCow',
            id: 3453412350,
            birthday: '12/10/19',
            gender: 'male/female',
            mother: 'motherTest',
            father: 'fatherTest',
            image: 'image'
        },
        {
            nickname: 'testCow',
            id: 546450,
            birthday: '12/10/19',
            gender: 'male/female',
            mother: 'motherTest',
            father: 'fatherTest',
            image: 'image'
        },
        {
            nickname: 'testCow',
            id: 345345210,
            birthday: '12/10/19',
            gender: 'male/female',
            mother: 'motherTest',
            father: 'fatherTest',
            image: 'image'
        },
        {
            nickname: 'testCow',
            id: 5465460,
            birthday: '12/10/19',
            gender: 'male/female',
            mother: 'motherTest',
            father: 'fatherTest',
            image: 'image'
        },
        {
            nickname: 'testCow',
            id: 3453450,
            birthday: '12/10/19',
            gender: 'male/female',
            mother: 'motherTest',
            father: 'fatherTest',
            image: 'image'
        },
        {
            nickname: 'testCow',
            id: 5464560,
            birthday: '12/10/19',
            gender: 'male/female',
            mother: 'motherTest',
            father: 'fatherTest',
            image: 'image'
        },
        {
            nickname: 'testCow',
            id: 34534520,
            birthday: '12/10/19',
            gender: 'male/female',
            mother: 'motherTest',
            father: 'fatherTest',
            image: 'image'
        },
        {
            nickname: 'testCow',
            id: 242340,
            birthday: '12/10/19',
            gender: 'male/female',
            mother: 'motherTest',
            father: 'fatherTest',
            image: 'image'
        }
    ];


    @action addAnimal(animal){
        this.animals = [...this.animals, animal];
        console.log(this.animals);
    }
}

export default AnimalStore = createContext(new AnimalStore());
