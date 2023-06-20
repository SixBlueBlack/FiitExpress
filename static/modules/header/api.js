function Logout(){
    fetch('/api/logout');
    window.location.replace('/');
}