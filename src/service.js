import config from './config';

export function deleteFromServer(bookmarkId) {
    fetch(`${config.API_ENDPOINT}/${bookmarkId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        }  
      })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // deleteFunction(bookmarkId);
        // return response.json()
      })
      .then(data => {
        console.log(data)
        // deleteFunction(bookmarkId);
      })
      .catch(error => {
        console.log(error)
      })
}



