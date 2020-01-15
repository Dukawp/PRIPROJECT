function joinGroup(id){

    console.log('joinGroup(' + id + ')');
    axios.post('/groups/' + id)
        .then(response => window.location.assign('/groups/' + id))
        .catch(error => console.log(error))

}