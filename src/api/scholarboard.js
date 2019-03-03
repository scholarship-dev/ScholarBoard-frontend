const axios = require('axios');


const scholarboard = axios.create({
  baseUrl: 'https://scholarboard-api.herokuapp.com/api/scholarships',
});

export default scholarboard;
