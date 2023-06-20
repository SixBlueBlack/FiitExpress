window.addEventListener('unload', function (){
    fetch('/api/update_user_info', {method : 'post', body : JSON.stringify(window.userData)})
})