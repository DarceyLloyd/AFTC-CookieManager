export class CookieManager {
  constructor() {
      const now = new Date();
      this.expiryTimeInSeconds = new Date(now.getTime() + 60000);
      this.path = "/";
      this.domain = "";
      this.secure = "";
  }

  log(args) {
      console.warn(args);
  }

  setSecurity(httpOnly, Secure, SameSiteStric) {
      if (httpOnly) this.secure = "HttpOnly;";
      if (Secure) this.secure += "Secure;";
      if (SameSiteStric) this.secure += "SameSite=Strict;";
  }

  setExpiryTime(expiryTimeInSeconds) {
      const now = new Date();
      this.expiryTimeInSeconds = new Date(now.getTime() + expiryTimeInSeconds * 1000);
      this.log(this.expiryTimeInSeconds);
  }

  set(name, value, expiryTimeInSeconds = null, path = null, domain = "") {
      this.setCookie(name, value, expiryTimeInSeconds, path, domain);
  }

  setCookie(name, value, expiryTimeInSeconds = null, path = null, domain = "") {
      if (name === "" || name.length === 0) {
          console.error("CookieManager.getCookie(name): Usage error - come on, I need the name of the cookie to set!");
          return null;
      }

      let localExpiryTime = this.expiryTimeInSeconds;
      if (expiryTimeInSeconds != null) {
          const now = new Date();
          localExpiryTime = new Date(now.getTime() + expiryTimeInSeconds * 1000);
      }

      let localPath = this.path;
      if (path != null) localPath = path;

      let localDomain = this.domain;
      if (domain != null) localDomain = domain;

      const cookie = `${name}=${value};expires=${localExpiryTime.toUTCString()};path=${localPath};domain=${localDomain};${this.secure}`;
      console.warn(cookie);
      document.cookie = cookie;
  }

  get(name) {
      return this.getCookie(name);
  }

  getCookie(name) {
      if (name === "" || name.length === 0) {
          console.error("CookieManager.getCookie(name): Usage error - come on, I need the name of the cookie to get!");
          return undefined;
      }

      this.logCookies();

      const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
      return cookieValue ? cookieValue.pop() : undefined;
  }

  del(name) {
      this.deleteCookie(name);
  }

  rem(name) {
      this.deleteCookie(name);
  }

  remove(name) {
      this.deleteCookie(name);
  }

  delete(name) {
      this.deleteCookie(name);
  }

  deleteCookie(name) {
      if (name === "" || name.length === 0) {
          console.error("CookieManager.deleteCookie(name): Usage error - come on, I need the name of the cookie to delete!");
          return undefined;
      }

      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }

  logCookies() {
      const cookies = document.cookie.split(";");

      for (let i = 0; i < cookies.length; i++) {
          console.log(cookies[i]);
      }
  }
}
