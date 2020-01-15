function deletePublication(id){

    console.log('deletePublication(' + id + ')');
    axios.delete('/admin/feed/' + id)
        .then(response => window.location.assign('/admin/feed'))
        .catch(error => console.log(error))

}

function deleteGroup(id){

    console.log('deleteGroup(' + id + ')');
    axios.delete('/admin/groups/' + id)
        .then(response => window.location.assign('/admin/groups'))
        .catch(error => console.log(error))

}

function deleteEvent(id){

    console.log('deleteEvent(' + id + ')');
    axios.delete('/admin/events/' + id)
        .then(response => window.location.assign('/admin/events'))
        .catch(error => console.log(error))

}

function deleteUser(id){

    console.log('deleteUser(' + id + ')');
    axios.delete('/admin/users/' + id)
        .then(response => window.location.assign('/admin/users'))
        .catch(error => console.log(error))

}