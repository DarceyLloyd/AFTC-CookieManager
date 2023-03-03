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
cm.domain = "/"; // String. If set you don't need to set the value in setCookie
cm.expiry = 3600; // Seconds. If set you don't need to set the value in setCookie

cm.setSecurity(
    httpOnly:Boolean,
    Secure:Boolean,
    SameSiteStric:Boolean,
)

// Set
cm.setCookie("my-cookie", "cookie-value");
// cm.set("my-cookie", "cookie-value"); // alias

// Get
const myCookie:String = cm.getCookie("my-cookie");
// const myCookie:String = cm.get("my-cookie"); // alias

// Delete
cm.deleteCookie("my-cookie");
// cm.remove("my-cookie); // alias
// cm.rem("my-cookie); // alias
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
```
