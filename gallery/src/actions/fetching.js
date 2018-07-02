import {fetchUsersBegin, fetchUsersError, fetchUsersSuccess} from "./index";

export function fetchUsers(count) {

    return dispatch =>{
        let getJSON = function(url, callback) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'json';
            xhr.onload = function() {
                let status = xhr.status;
                if (status === 200) {
                    callback(null, xhr.response);
                } else {
                    callback(status, xhr.response);
                }
            };
            xhr.send();
            dispatch(fetchUsersBegin());


        };
        getJSON('http://dev.frevend.com/json/users.json',  function(err, data) {
            if (err != null) {
                console.log(err);
                dispatch(fetchUsersError(err));
            } else {
                let filter = count;
                if(filter===5){
                    filter=4;
                }
                if(filter===0){
                    filter=1;
                }
                let result = data.users.filter(el=>el.id>=filter*5-4&&el.id<=filter*5);
                console.log(result);
                dispatch(fetchUsersSuccess(result));
            }
        });
    }
}


