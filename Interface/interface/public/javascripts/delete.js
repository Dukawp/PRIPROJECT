function deletePublication(id){

    console.log('JAVASCRIPT: deletePublication(' + id + ')');
    axios.delete('/admin/feed/' + id)
        .then(response => window.location.assign('/admin/feed'))
        .catch(error => console.log(error))

}

function deleteGroup(id){

    console.log('JAVASCRIPT: deleteGroup(' + id + ')');
    axios.delete('/admin/groups/' + id)
        .then(response => window.location.assign('/admin/groups'))
        .catch(error => console.log(error))

}

function deleteEvent(id){

    console.log('JAVASCRIPT: deleteEvent(' + id + ')');
    axios.delete('/admin/events/' + id)
        .then(response => window.location.assign('/admin/events'))
        .catch(error => console.log(error))

}

function deleteUser(id){

    console.log('JAVASCRIPT: deleteUser(' + id + ')');
    axios.delete('/admin/users/' + id)
        .then(response => window.location.assign('/admin/users'))
        .catch(error => console.log(error))

}