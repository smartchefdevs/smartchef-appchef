/**
 * Class that has all Fetch implemetations
 * 
 * Be careful with call back methods 'functionSuccess' and 'functionError'
 * This are to do something on app when request is OK or BAD 
 */
class FetchService{

    post = (url,body,functionSuccess,functionError)=>{
        fetch(url,{
            method: 'POST',
            credentials: true,
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
        })
        .then((res)=>{
            return res.json();
        })
        .then((json)=>{
            if(json.id != 1){
                functionError(json.msg);
            } else {
                functionSuccess(json);
            }
        })
        .catch((error)=>{
            functionError(error);
        });
    }
}

export default FetchService;