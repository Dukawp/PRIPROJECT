function joinGroup(id){

    console.log('JAVASCRIPT: joinGroup(' + id + ')');
    axios.post('/groups/join/' + id)
        .then(response => window.location.assign('/feed'))
        .catch(error => console.log(error))

}

function exitGroup(id){

    console.log('JAVASCRIPT: exitGroup(' + id + ')');
    axios.post('/groups/exit/' + id)
        .then(response => window.location.assign('/feed'))
        .catch(error => console.log(error))

}

function joinEvent(id){

    console.log('JAVASCRIPT: joinEvent(' + id + ')');
    axios.post('/events/join/' + id)
        .then(response => window.location.assign('/feed'))
        .catch(error => console.log(error))

}

function exitEvent(id){

    console.log('JAVASCRIPT: exitEvent(' + id + ')');
    axios.post('/events/exit/' + id)
        .then(response => window.location.assign('/feed'))
        .catch(error => console.log(error))

}
