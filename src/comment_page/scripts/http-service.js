export class HTTPService {
    get(url, successCallBack, errorCallBack) { //url - адрес сервера, successCallBack - что нужно выполнить при удачном выполнении запроса, errorCallBack - при неудачном 
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url); //указывает какую команду хотим выполнить и адресс сервера
        xhr.send(); //данные улетели

        //проверка состояния, 4 указывает на возврат от сервера данных полных, клиент получил последнюю порцию данных(есть состояния от 1-4), 
        // а 200 на успешное выполнение запроса и получения данных от сервера (есть ошибки от 100-500)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const parseData = JSON.parse(xhr.response); //полученый массив строк переводим в массив объектов
                    successCallBack(parseData);
                } else {
                    errorCallBack(xhr);
                }
            }
        }
    }

    post(url, data, successCallBack, errorCallBack) { //data - информация которую нужно отправить
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);

        xhr.setRequestHeader('content-type', 'application/json'); //даем понять серверу, что мы ему отправим json строку
        xhr.send((typeof data !== 'string') ? JSON.stringify(data) : data); //данные превращаем в строку делая сначало проверку на то, являются ли данные уже строкой
        
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const parseData = JSON.parse(xhr.response); //полученый массив строк переводим в массив объектов
                    successCallBack(parseData);
                } else {
                    errorCallBack(xhr);
                }
            }
        }
    }

    delete(url, successCallBack, errorCallBack) {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', url);

        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const parseData = JSON.parse(xhr.response);
                    successCallBack(parseData);
                } else {
                    errorCallBack(xhr);
                }
            }
        }
    }
}