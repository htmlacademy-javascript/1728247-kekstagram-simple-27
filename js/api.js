const URL = 'https://27.javascript.pages.academy/kekstagram-simple';
const getData = (onSuccess, onError) => fetch(`${URL}/data`)
  .then((response) => response.json())
  .then((data) => onSuccess(data))
  .catch(() => onError());

const sendData = (onSuccess, onError, data) => fetch(URL, {
  method: 'POST',
  body: data,
})
  .then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onError();
    }
  })
  .catch(() => onError());

export {getData, sendData};
