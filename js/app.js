'use strict'

let Seattle = {

    location: 'Seattle',
    min: 23,
    max: 65,
    avg:6.3,
    num:0,
    cxPerhour:0,
    total:0,

    workHours: ['6 Am: ', '7 Am: ', '8 Am: ', '9 Am: ', '10 Am: ', '11 Am: ', '12 pm: ', '1 pm: ', '2 pm: ', '3 pm: ', '4 pm: ', '5 pm: ', '6 pm: ', '7 pm: '],

    getNumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.num = Math.floor(Math.random() * (max - min + 1) + min);
        this.cxPerhour=this.num*this.avg;
        return this.cxPerhour;

    },

   render: function () {
        let divEl = document.getElementById('Location');

        let h2El = document.createElement('h2');
        h2El.textContent = this.location;
        divEl.appendChild(h2El);

        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);

    


        for (let i = 0; i < this.workHours.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${this.workHours[i]}  ${this.getNumber(this.min,this.max)} cookies`;
            ulEl.appendChild(liEl);

            this.total+=this.getNumber(this.min,this.max);
        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total ${this.total} cookies`;
        ulEl.appendChild(liEl);

    }
   
}






let Tokyo = {

    location: 'Tokyo',
    min: 3,
    max: 24,
    avg:1.2,
    num:0,
    total:0,
    cxPerhour:0,

    workHours: ['6 Am: ', '7 Am: ', '8 Am: ', '9 Am: ', '10 Am: ', '11 Am: ', '12 pm: ', '1 pm: ', '2 pm: ', '3 pm: ', '4 pm: ', '5 pm: ', '6 pm: ', '7 pm: '],

    getNumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.num = Math.floor(Math.random() * (max - min + 1) + min);
        this.cxPerhour=this.num*this.avg;
        return this.cxPerhour;

    },

    render: function () {
        let divEl = document.getElementById('Location');

        let h2El = document.createElement('h2');
        h2El.textContent = this.location;
        divEl.appendChild(h2El);

        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);



        for (let i = 0; i < this.workHours.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${this.workHours[i]}  ${this.getNumber(this.min,this.max)} cookies`;
            this.total+=this.getNumber(this.min,this.max);
            ulEl.appendChild(liEl);
        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total ${this.total} cookies`;
        ulEl.appendChild(liEl);

    }
   
}





let Dubai = {

    location: 'Dubai',
    min: 11,
    max: 38,
    avg:3.7,
    total:0,
    num:0,
    cxPerhour:0,

    workHours: ['6 Am: ', '7 Am: ', '8 Am: ', '9 Am: ', '10 Am: ', '11 Am: ', '12 pm: ', '1 pm: ', '2 pm: ', '3 pm: ', '4 pm: ', '5 pm: ', '6 pm: ', '7 pm: '],

    getNumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.num = Math.floor(Math.random() * (max - min + 1) + min);
        this.cxPerhour=this.num*this.avg;
        return this.cxPerhour;

    },

    render: function () {
        let divEl = document.getElementById('Location');

        let h2El = document.createElement('h2');
        h2El.textContent = this.location;
        divEl.appendChild(h2El);

        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);




        for (let i = 0; i < this.workHours.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${this.workHours[i]}  ${this.getNumber(this.min,this.max)} cookies`;
            this.total+=this.getNumber(this.min,this.max);
            ulEl.appendChild(liEl);
        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total ${this.total} cookies`;
        ulEl.appendChild(liEl);

    }
   
}







let Paris = {

    location: 'Paris',
    min: 20,
    max: 38,
    avg:2.3,
    total:0,
    num:0,
    cxPerhour:0,

    workHours: ['6 Am: ', '7 Am: ', '8 Am: ', '9 Am: ', '10 Am: ', '11 Am: ', '12 pm: ', '1 pm: ', '2 pm: ', '3 pm: ', '4 pm: ', '5 pm: ', '6 pm: ', '7 pm: '],

    getNumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.num = Math.floor(Math.random() * (max - min + 1) + min);
        this.cxPerhour=this.num*this.avg;
        return this.cxPerhour;

    },

    render: function () {
        let divEl = document.getElementById('Location');

        let h2El = document.createElement('h2');
        h2El.textContent = this.location;
        divEl.appendChild(h2El);

        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);




        for (let i = 0; i < this.workHours.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${this.workHours[i]}  ${this.getNumber(this.min,this.max)} cookies`;
            this.total+=this.getNumber(this.min,this.max);
            ulEl.appendChild(liEl);
        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total ${this.total} cookies`;
        ulEl.appendChild(liEl);

    }
   
}











let Lima = {

    location: 'Lima',
    min: 2,
    max: 16,
    avg:4.6,
    total:0,
    num:0,
    cxPerhour:0,

    workHours: ['6 Am: ', '7 Am: ', '8 Am: ', '9 Am: ', '10 Am: ', '11 Am: ', '12 pm: ', '1 pm: ', '2 pm: ', '3 pm: ', '4 pm: ', '5 pm: ', '6 pm: ', '7 pm: '],

    getNumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.num = Math.floor(Math.random() * (max - min + 1) + min);
        this.cxPerhour=this.num*this.avg;
        return this.cxPerhour;

    },

    render: function () {
        let divEl = document.getElementById('Location');

        let h2El = document.createElement('h2');
        h2El.textContent = this.location;
        divEl.appendChild(h2El);

        let ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);




        for (let i = 0; i < this.workHours.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${this.workHours[i]}  ${this.getNumber(this.min,this.max)} cookies`;
            this.total+=this.getNumber(this.min,this.max);
            ulEl.appendChild(liEl);
        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total ${this.total} cookies`;
        ulEl.appendChild(liEl);

    }
   
}











Seattle.render();



Tokyo.render();



Dubai.render();


Paris.render();



Lima.render();