import axios from "axios";

export default class CatalogController {

function(items) {
    axios.get('http://127.0.0.1:40/getgoodie/')
      .then(function(response) {
        if(response.status = 200) {
            items = response.data;
        //   console.log(items);
      } else {
          console.log('error');
      }
  })
  console.log(items);
  return items;
}

}