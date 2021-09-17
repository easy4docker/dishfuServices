class Engine {
     DatabaseApi = (apiCode, dt, callback)=>{
        const me = this;
        fetch(me.server + '/api/' + apiCode, {
            method: 'POST',
            body: JSON.stringify(dt),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(v=>v.json()).then((data)=> {
            callback(data);
        }).catch((err) => {
            callback(err);
        });
     }

}

export default Engine;