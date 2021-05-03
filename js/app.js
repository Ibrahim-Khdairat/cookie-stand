'use strict'

let Seattle = {

    location: 'Seattle',
    min: 23,
    max: 65,
    avg:6.3,
    cxPerhour:[],
    cookiesPerhour:[],
    total:0,

    workHours: ['6 Am: ', '7 Am: ', '8 Am: ', '9 Am: ', '10 Am: ', '11 Am: ', '12 Pm: ', '1 Pm: ', '2 Pm: ', '3 Pm: ', '4 Pm: ', '5 Pm: ', '6 Pm: ', '7 Pm: ','8 Pm: '],

    randomCxnum: function () {
        for (let cx=0;cx<this.workHours.length;cx++)
        {
            
            this.cxPerhour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }
        

    },

    salesPerhour:function ()
    {
        for (let c=0;c<this.workHours.length;c++)
        {
            this.cookiesPerhour.push(Math.ceil(this.cxPerhour[c] * this.avg));
            this.total+=this.cookiesPerhour[c];
        }
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
            liEl.textContent = `${this.workHours[i]}  ${this.cookiesPerhour[i]} cookies`;
            ulEl.appendChild(liEl);

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
    cxPerhour:[],
    cookiesPerhour:[],
    total:0,

    workHours: ['6 Am: ', '7 Am: ', '8 Am: ', '9 Am: ', '10 Am: ', '11 Am: ', '12 Pm: ', '1 Pm: ', '2 Pm: ', '3 Pm: ', '4 Pm: ', '5 Pm: ', '6 Pm: ', '7 Pm: ','8 Pm: '],

    randomCxnum: function () {
        for (let cx=0;cx<this.workHours.length;cx++)
        {
            
            this.cxPerhour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }
        

    },

    salesPerhour:function ()
    {
        for (let c=0;c<this.workHours.length;c++)
        {
            this.cookiesPerhour.push(Math.ceil(this.cxPerhour[c] * this.avg));
            this.total+=this.cookiesPerhour[c];
        }
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
            liEl.textContent = `${this.workHours[i]}  ${this.cookiesPerhour[i]} cookies`;
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
    cxPerhour:[],
    cookiesPerhour:[],
    total:0,

    workHours: ['6 Am: ', '7 Am: ', '8 Am: ', '9 Am: ', '10 Am: ', '11 Am: ', '12 Pm: ', '1 Pm: ', '2 Pm: ', '3 Pm: ', '4 Pm: ', '5 Pm: ', '6 Pm: ', '7 Pm: ','8 Pm: '],

    randomCxnum: function () {
        for (let cx=0;cx<this.workHours.length;cx++)
        {
            
            this.cxPerhour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }
        

    },

    salesPerhour:function ()
    {
        for (let c=0;c<this.workHours.length;c++)
        {
            this.cookiesPerhour.push(Math.ceil(this.cxPerhour[c] * this.avg));
            this.total+=this.cookiesPerhour[c];
        }
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
            liEl.textContent = `${this.workHours[i]}  ${this.cookiesPerhour[i]} cookies`;
            ulEl.appendChild(liEl);

        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total ${this.total} cookies`;
        ulEl.appendChild(liEl);

    }
   
}







let Paris = {

    location: 'Paris',
    min: 2,
    max: 38,
    avg:2.3,
    cxPerhour:[],
    cookiesPerhour:[],
    total:0,

    workHours: ['6 Am: ', '7 Am: ', '8 Am: ', '9 Am: ', '10 Am: ', '11 Am: ', '12 Pm: ', '1 Pm: ', '2 Pm: ', '3 Pm: ', '4 Pm: ', '5 Pm: ', '6 Pm: ', '7 Pm: ','8 Pm: '],

    randomCxnum: function () {
        for (let cx=0;cx<this.workHours.length;cx++)
        {
            
            this.cxPerhour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }
        

    },

    salesPerhour:function ()
    {
        for (let c=0;c<this.workHours.length;c++)
        {
            this.cookiesPerhour.push(Math.ceil(this.cxPerhour[c] * this.avg));
            this.total+=this.cookiesPerhour[c];
        }
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
            liEl.textContent = `${this.workHours[i]}  ${this.cookiesPerhour[i]} cookies`;
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
    cxPerhour:[],
    cookiesPerhour:[],
    total:0,

    workHours: ['6 Am: ', '7 Am: ', '8 Am: ', '9 Am: ', '10 Am: ', '11 Am: ', '12 Pm: ', '1 Pm: ', '2 Pm: ', '3 Pm: ', '4 Pm: ', '5 Pm: ', '6 Pm: ', '7 Pm: ','8 Pm: '],

    randomCxnum: function () {
        for (let cx=0;cx<this.workHours.length;cx++)
        {
            
            this.cxPerhour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }
        

    },

    salesPerhour:function ()
    {
        for (let c=0;c<this.workHours.length;c++)
        {
            this.cookiesPerhour.push(Math.ceil(this.cxPerhour[c] * this.avg));
            this.total+=this.cookiesPerhour[c];
        }
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
            liEl.textContent = `${this.workHours[i]}  ${this.cookiesPerhour[i]} cookies`;
            ulEl.appendChild(liEl);

        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total ${this.total} cookies`;
        ulEl.appendChild(liEl);

    }
   
}



Seattle.randomCxnum();
Seattle.salesPerhour();
Seattle.render();

Tokyo.randomCxnum();
Tokyo.salesPerhour();
Tokyo.render();


Dubai.randomCxnum();
Dubai.salesPerhour();
Dubai.render();

Paris.randomCxnum();
Paris.salesPerhour();
Paris.render();

Lima.randomCxnum();
Lima.salesPerhour();

Lima.render();