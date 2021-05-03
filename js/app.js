'use strict'

let Cities=[];
let workHours= ['6 Am: ', '7 Am: ', '8 Am: ', '9 Am: ', '10 Am: ', '11 Am: ', '12 Pm: ', '1 Pm: ', '2 Pm: ', '3 Pm: ', '4 Pm: ', '5 Pm: ', '6 Pm: ', '7 Pm: '];

function City(location,min,max,avg)
{
    this.location=location;
    this.min=min;
    this.max=max;
    this.avg=avg;
    this.cxPerhour=[];
    this.cookiesPerhour=[];
    this.total=0;
Cities.push(this)
}

City.prototype.randomCxnum = function (min, max) 
{

     for (let cx=0;cx<workHours.length;cx++)
        {
            
            this.cxPerhour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }

}

City.prototype.salesPerhour=function()
{
    for (let c=0;c<workHours.length;c++)
    {
        this.cookiesPerhour.push(Math.ceil(this.cxPerhour[c] * this.avg));
        this.total+=this.cookiesPerhour[c];
    }
}




  function renderTableHeader ()
  {
      let divEl = document.getElementById('Tables');

        let table = document.createElement('table');
        divEl.appendChild(table);

        let tr1=document.createElement('tr');
        table.appendChild(tr1);

        let th1=document.createElement('th');
        tr1.appendChild(th1);
        let td1=document.createElement('td');
        th1.appendChild(td1);
        td1.textContent=' Working Hours  ';

       for(let i =0;i<workHours.length;i++)
            {let td1=document.createElement('td');
            th1.appendChild(td1);
            td1.textContent=workHours[i];}
}
        
City.prototype.render=function()
    {

       
        let divEl = document.getElementById('Tables');

        let table = document.createElement('table');
        divEl.appendChild(table);

        let tr2=document.createElement('tr');
        table.appendChild(tr2);

        let td2=document.createElement('td');
        tr2.appendChild(td2);
        td2.textContent=this.location;
        for(let i =0;i<this.cookiesPerhour.length;i++)
        {
            let td2=document.createElement('td');
        tr2.appendChild(td2);
        td2.textContent=this.cookiesPerhour[i];
        }













        // let divEl = document.getElementById('Location');

        // let h2El = document.createElement('h2');
        // h2El.textContent = this.location;
        // divEl.appendChild(h2El);

        // let ulEl = document.createElement('ul');
        // divEl.appendChild(ulEl);

    


        // for (let i = 0; i < this.workHours.length; i++) {
        //     let liEl = document.createElement('li');
        //     liEl.textContent = `${this.workHours[i]}  ${this.cookiesPerhour[i]} cookies`;
        //     ulEl.appendChild(liEl);

        // }
        // let liEl = document.createElement('li');
        // liEl.textContent = `Total ${this.total} cookies`;
        // ulEl.appendChild(liEl);

    }


let Seattle = new City('Seattle',23,65,6.3);
let Tokyo = new City('Tokyo',3,24,1.2);
let Dubai = new City('Dubai',11,38,3.7);
let Paris = new City('Paris',20,38,2.3);
let Lima = new City('Lima',2,16,4.6);

renderTableHeader ();

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

// let Seattle = {

//     location: 'Seattle',
//     min: 23,
//     max: 65,
//     avg:6.3,
//     cxPerhour:[],
//     cookiesPerhour:[],
//     total:0,

//     workHours: ['6 Am: ', '7 Am: ', '8 Am: ', '9 Am: ', '10 Am: ', '11 Am: ', '12 Pm: ', '1 Pm: ', '2 Pm: ', '3 Pm: ', '4 Pm: ', '5 Pm: ', '6 Pm: ', '7 Pm: ','8 Pm: '],

//     randomCxnum: function () {
//         for (let cx=0;cx<this.workHours.length;cx++)
//         {
            
//             this.cxPerhour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//         }
        

//     },

//     salesPerhour:function ()
//     {
//         for (let c=0;c<this.workHours.length;c++)
//         {
//             this.cookiesPerhour.push(Math.ceil(this.cxPerhour[c] * this.avg));
//             this.total+=this.cookiesPerhour[c];
//         }
//     },

//    render: function () {
       
//         let divEl = document.getElementById('Location');

//         let h2El = document.createElement('h2');
//         h2El.textContent = this.location;
//         divEl.appendChild(h2El);

//         let ulEl = document.createElement('ul');
//         divEl.appendChild(ulEl);

    


//         for (let i = 0; i < this.workHours.length; i++) {
//             let liEl = document.createElement('li');
//             liEl.textContent = `${this.workHours[i]}  ${this.cookiesPerhour[i]} cookies`;
//             ulEl.appendChild(liEl);

//         }
//         let liEl = document.createElement('li');
//         liEl.textContent = `Total ${this.total} cookies`;
//         ulEl.appendChild(liEl);

//     }
   
// }





// let Tokyo = {

//     location: 'Tokyo',
//     min: 3,
//     max: 24,
//     avg:1.2,
//     cxPerhour:[],
//     cookiesPerhour:[],
//     total:0,

//     workHours: ['6 Am: ', '7 Am: ', '8 Am: ', '9 Am: ', '10 Am: ', '11 Am: ', '12 Pm: ', '1 Pm: ', '2 Pm: ', '3 Pm: ', '4 Pm: ', '5 Pm: ', '6 Pm: ', '7 Pm: ','8 Pm: '],

//     randomCxnum: function () {
//         for (let cx=0;cx<this.workHours.length;cx++)
//         {
            
//             this.cxPerhour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//         }
        

//     },

//     salesPerhour:function ()
//     {
//         for (let c=0;c<this.workHours.length;c++)
//         {
//             this.cookiesPerhour.push(Math.ceil(this.cxPerhour[c] * this.avg));
//             this.total+=this.cookiesPerhour[c];
//         }
//     },

//    render: function () {
       
//         let divEl = document.getElementById('Location');

//         let h2El = document.createElement('h2');
//         h2El.textContent = this.location;
//         divEl.appendChild(h2El);

//         let ulEl = document.createElement('ul');
//         divEl.appendChild(ulEl);

    


//         for (let i = 0; i < this.workHours.length; i++) {
//             let liEl = document.createElement('li');
//             liEl.textContent = `${this.workHours[i]}  ${this.cookiesPerhour[i]} cookies`;
//             ulEl.appendChild(liEl);

//         }
//         let liEl = document.createElement('li');
//         liEl.textContent = `Total ${this.total} cookies`;
//         ulEl.appendChild(liEl);

//     }
   
// }







// let Dubai = {

//     location: 'Dubai',
//     min: 11,
//     max: 38,
//     avg:3.7,
//     cxPerhour:[],
//     cookiesPerhour:[],
//     total:0,

//     workHours: ['6 Am: ', '7 Am: ', '8 Am: ', '9 Am: ', '10 Am: ', '11 Am: ', '12 Pm: ', '1 Pm: ', '2 Pm: ', '3 Pm: ', '4 Pm: ', '5 Pm: ', '6 Pm: ', '7 Pm: ','8 Pm: '],

//     randomCxnum: function () {
//         for (let cx=0;cx<this.workHours.length;cx++)
//         {
            
//             this.cxPerhour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//         }
        

//     },

//     salesPerhour:function ()
//     {
//         for (let c=0;c<this.workHours.length;c++)
//         {
//             this.cookiesPerhour.push(Math.ceil(this.cxPerhour[c] * this.avg));
//             this.total+=this.cookiesPerhour[c];
//         }
//     },

//    render: function () {
       
//         let divEl = document.getElementById('Location');

//         let h2El = document.createElement('h2');
//         h2El.textContent = this.location;
//         divEl.appendChild(h2El);

//         let ulEl = document.createElement('ul');
//         divEl.appendChild(ulEl);

    


//         for (let i = 0; i < this.workHours.length; i++) {
//             let liEl = document.createElement('li');
//             liEl.textContent = `${this.workHours[i]}  ${this.cookiesPerhour[i]} cookies`;
//             ulEl.appendChild(liEl);

//         }
//         let liEl = document.createElement('li');
//         liEl.textContent = `Total ${this.total} cookies`;
//         ulEl.appendChild(liEl);

//     }
   
// }







// let Paris = {

//     location: 'Paris',
//     min: 2,
//     max: 38,
//     avg:2.3,
//     cxPerhour:[],
//     cookiesPerhour:[],
//     total:0,

//     workHours: ['6 Am: ', '7 Am: ', '8 Am: ', '9 Am: ', '10 Am: ', '11 Am: ', '12 Pm: ', '1 Pm: ', '2 Pm: ', '3 Pm: ', '4 Pm: ', '5 Pm: ', '6 Pm: ', '7 Pm: ','8 Pm: '],

//     randomCxnum: function () {
//         for (let cx=0;cx<this.workHours.length;cx++)
//         {
            
//             this.cxPerhour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//         }
        

//     },

//     salesPerhour:function ()
//     {
//         for (let c=0;c<this.workHours.length;c++)
//         {
//             this.cookiesPerhour.push(Math.ceil(this.cxPerhour[c] * this.avg));
//             this.total+=this.cookiesPerhour[c];
//         }
//     },

//    render: function () {
       
//         let divEl = document.getElementById('Location');

//         let h2El = document.createElement('h2');
//         h2El.textContent = this.location;
//         divEl.appendChild(h2El);

//         let ulEl = document.createElement('ul');
//         divEl.appendChild(ulEl);

    


//         for (let i = 0; i < this.workHours.length; i++) {
//             let liEl = document.createElement('li');
//             liEl.textContent = `${this.workHours[i]}  ${this.cookiesPerhour[i]} cookies`;
//             ulEl.appendChild(liEl);

//         }
//         let liEl = document.createElement('li');
//         liEl.textContent = `Total ${this.total} cookies`;
//         ulEl.appendChild(liEl);

//     }
   
// }









// let Lima = {

//     location: 'Lima',
//     min: 2,
//     max: 16,
//     avg:4.6,
//     cxPerhour:[],
//     cookiesPerhour:[],
//     total:0,

//     workHours: ['6 Am: ', '7 Am: ', '8 Am: ', '9 Am: ', '10 Am: ', '11 Am: ', '12 Pm: ', '1 Pm: ', '2 Pm: ', '3 Pm: ', '4 Pm: ', '5 Pm: ', '6 Pm: ', '7 Pm: ','8 Pm: '],

//     randomCxnum: function () {
//         for (let cx=0;cx<this.workHours.length;cx++)
//         {
            
//             this.cxPerhour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//         }
        

//     },

//     salesPerhour:function ()
//     {
//         for (let c=0;c<this.workHours.length;c++)
//         {
//             this.cookiesPerhour.push(Math.ceil(this.cxPerhour[c] * this.avg));
//             this.total+=this.cookiesPerhour[c];
//         }
//     },

//    render: function () {
       
//         let divEl = document.getElementById('Location');

//         let h2El = document.createElement('h2');
//         h2El.textContent = this.location;
//         divEl.appendChild(h2El);

//         let ulEl = document.createElement('ul');
//         divEl.appendChild(ulEl);

    


//         for (let i = 0; i < this.workHours.length; i++) {
//             let liEl = document.createElement('li');
//             liEl.textContent = `${this.workHours[i]}  ${this.cookiesPerhour[i]} cookies`;
//             ulEl.appendChild(liEl);

//         }
//         let liEl = document.createElement('li');
//         liEl.textContent = `Total ${this.total} cookies`;
//         ulEl.appendChild(liEl);

//     }
   
// }



// Seattle.randomCxnum();
// Seattle.salesPerhour();
// Seattle.render();

// Tokyo.randomCxnum();
// Tokyo.salesPerhour();
// Tokyo.render();


// Dubai.randomCxnum();
// Dubai.salesPerhour();
// Dubai.render();

// Paris.randomCxnum();
// Paris.salesPerhour();
// Paris.render();

// Lima.randomCxnum();
// Lima.salesPerhour();

// Lima.render();