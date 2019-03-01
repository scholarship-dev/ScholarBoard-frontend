const axios = require('axios');


const scholarboard = axios.create({
  baseUrl: 'https://cors.io/?https://scholarboard-api.herokuapp.com/api/scholarships',
});

export default scholarboard;
