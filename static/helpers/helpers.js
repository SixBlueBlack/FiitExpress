function requireJs(src){
    // let script = document.createElement('script');
    // script.setAttribute('src', src);
    // document.body.prepend(script);
    // console.log(script)

    let newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = src;
    document.getElementsByTagName('head')[0].appendChild(newScript);
}

function requireCss(src){
    let css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('href', src);
    document.head.prepend(css);
}