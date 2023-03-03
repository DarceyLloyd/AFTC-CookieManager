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
cm.domain = "/"; // this is set to / by default

cm.setSecurity(
    httpOnly:Boolean,
    Secure:Boolean,
    SameSiteStric:Boolean,
)

cm.setExpiryTime(600);

// Set
cm.setCookie("my-cookie", "cookie-value");
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

### Usage example 2 (TS)
```
const cm:CookieManager = new CookieManager()
cm.set("my-cookie", "cookie-value", 3600, "/");
```


### Usage example 3 (JS)
```
const cm = new CookieManager()
cm.set("my-cookie", "cookie-value", 3600, "/");
cm.get("my-cookie", "cookie-value", 3600, "/");
cm.del("my-cookie");
```

### Usage example 4 (JS)
```
const cm = new CookieManager()
cm.domain = "/"; // this is set to / by default

cm.setSecurity(
    httpOnly:Boolean,
    Secure:Boolean,
    SameSiteStric:Boolean,
)

cm.setExpiryTime(600);

// Set
cm.setCookie("my-cookie", "cookie-value");
// cm.set("my-cookie", "cookie-value"); // alias

// Get
const myCookie = cm.getCookie("my-cookie");
// const myCookie = cm.get("my-cookie"); // alias

// Delete
cm.deleteCookie("my-cookie");
// cm.delete("my-cookie); // alias
// cm.del("my-cookie); // alias
// cm.remove("my-cookie); // alias
// cm.rem("my-cookie); // alias

// Log available cookies
cm.logCookies();
```
