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

// Second solution
function domainName(url){
  let domain = ''
  if ( url.includes("http" && "www") ) domain = url.split(".")[1]
  else if ( url.includes("http") ) domain = url.split(".")[0].split("/")[2]
  else domain = url.split(".")[0]
  return domain;
}

// Third Solution
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};
