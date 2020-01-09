function deletePublication(id){

    console.log('deletePublication(' + id + ')');
    axios.delete('/admin/feed/' + id)
        .then(response => window.location.assign('/admin/feed'))
        .catch(error => console.log(error))

}