/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url){
    let host = '';
    if ( url.includes('/') ) {
      host = url.split('/');
      
      if ( !url.includes('www') ) {
        host = host.filter( el => el.includes('.') )[0].
          split('.')[0];    
      } else {
        host = host.filter( el => el.includes('.') )[0].
          split('.')[1];
      }
    }
    else {
      host = url.split('.');
      
      if ( !url.includes('www') ) {
        host = host[0];    
      } else {
        host = host[1];
      }      
    }
    return host;
}