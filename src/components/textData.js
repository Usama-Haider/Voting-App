import  img1  from "./imges/img-1.jpg";
import img2 from './imges/img-2.jpg';
import img3 from './imges/img-3.jpg';

// jaab data ki alag file banani hoon tu ap khali data(array of objects) kay sath export krr day gay
export const users = [
    {        
        name: 'Hafiz Noman',
        age: 20,
        votes:33,
        imgUrl : img1,
        id: 1,
        submitted : 'Hamza Ali',
        discription: 'On Demand castle construction experties'
    },
    {
        name: 'Ahamd Khalid',
        age: 21,
        id: 2,
        votes:22,
        imgUrl : img2,
        submitted : 'Mansoor Ali',
        discription: 'On Demand castle construction experties'

    },
    {
        name: 'M Jamshad Amin',
        age: 22,
        id: 3,
        votes:18,
        imgUrl : img3,
        discription: 'On Demand castle construction experties',
        submitted : 'Abdul Wadood'
    },
    {
        name: 'Salman Saeed',
        age: 31,
        email: 'noman@gmail.com',
        id: 4,
        votes:15,
        imgUrl : img3,
        submitted : 'Abu Bakr',
        discription: 'On Demand castle construction experties'
    },
    
];
