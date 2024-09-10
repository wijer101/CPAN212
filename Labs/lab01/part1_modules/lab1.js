const lodash = require("lodash")

const holidays = [
  { name: 'Christmas', date: new Date ('2024-12-25') },
  { name: 'Canada Day', date: new Date ('2025-07-01') },
  { name: 'New Year\'s Day', date: new Date ('2025-01-01') },
  { name: 'Thanksgiving', date: new Date('2024-10-14') },
  { name: 'Easter', date: new Date('2025-03-31') },
  { name: 'Labour Day', date: new Date ('2025-09-02') }
];

console.log(holidays)

//step 2
const today = new Date()
holidays.forEach(holiday => {
    console.log(holiday);
    console.log((holiday.date - today)/(1000*60*60*24));
})

//step 3
console.log(lodash.sample(holidays))

//step 4
console.log(lodash.findIndex(holidays, {name: 'Canada Day'}))