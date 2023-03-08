## AFTC CookieManager
Just a quick and painless cookie wrapper.


### Install
```
npm i aftc-cookiemanager
```

### Arguments
```
CookieManager.setCookie(
    cookieName:String, 
    cookieValue:string, 
    expiryTime:number (seconds), 
    domain: string = "/"
);
```


### Usage example 1 (TS)
```
const cm:CookieManager = new CookieManager()
cm = new CookieManager();
// cm.setPath("/");
// cm.setDomain("yourdomain.com");
cm.setExpiryTime(600); // optional can be set on setCookie
cm.setSameSiteStrict(true);
cm.setHttpOnly(true);
cm.setSecure(true);

// Set
cm.setCookie("my-cookie", "cookie-value");
// cm.set("my-cookie","1234",30,"/","/admin"); // All options set
// cm.set("my-cookie", "cookie-value"); // alias

// Get
const myCookie:String = cm.getCookie("my-cookie");
// const myCookie:String = cm.get("my-cookie"); // alias

// Delete
cm.deleteCookie("my-cookie");
// cm.delete("my-cookie); // alias
// cm.del("my-cookie); // alias
// cm.remove("my-cookie); // alias
// cm.rem("my-cookie); // alias

// Log available cookies
cm.logCookies();
```



### Usage example 2 (JS)
```
const cm = new CookieManager()
cm = new CookieManager();
// cm.setPath("/");
// cm.setDomain("yourdomain.com");
cm.setExpiryTime(600); // optional can be set on setCookie
cm.setSameSiteStrict(true);
cm.setHttpOnly(true);
cm.setSecure(true);

// Set
cm.setCookie("my-cookie", "cookie-value");
// cm.set("my-cookie","1234",30,"/","/admin"); // All options set
// cm.set("my-cookie", "cookie-value"); // alias

// Get
const myCookie:String = cm.getCookie("my-cookie");
// const myCookie:String = cm.get("my-cookie"); // alias

// Delete
cm.deleteCookie("my-cookie");
// cm.delete("my-cookie); // alias
// cm.del("my-cookie); // alias
// cm.remove("my-cookie); // alias
// cm.rem("my-cookie); // alias

// Log available cookies
cm.logCookies();
```
