// interfaces
// - - - - - - -

// types
// - - - - - - - - - - - - - - - - - - - - - - - -

export class CookieManager {

    // Var defs
    public expiryTimeInSeconds: Date;
    public path: string = "/";
    public domain: string = ""
    public secure: string = "";
    // - - - - - - - - - - - - - - - - - - - - - - - -

    constructor() {
        const now = new Date();
        this.expiryTimeInSeconds = new Date(now.getTime() + (3600 * 1000));
        this.log(this.expiryTimeInSeconds);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    log(args: any) {
        console.warn(args);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    setSecurity(httpOnly: boolean, Secure: boolean, SameSiteStric: boolean) {
        if (httpOnly) {
            this.secure = "HttpOnly;"
        }
        if (Secure) {
            this.secure += "Secure;"
        }
        if (SameSiteStric) {
            this.secure += "SameSite=Strict;"
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    setExpiryTime(expiryTimeInSeconds: number) {
        const now = new Date();
        this.expiryTimeInSeconds = new Date(now.getTime() + (expiryTimeInSeconds * 1000));
        this.log(this.expiryTimeInSeconds);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    set(
        name: string,
        value: string,
        expiryTimeInSeconds: number | null = null,
        path: string | null = null,
        domain: string = "") {
        this.setCookie(name, value, expiryTimeInSeconds, path, domain);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    setCookie(
        name: string,
        value: string,
        expiryTimeInSeconds: number | null = null,
        path: string | null = null,
        domain: string = ""
    ) {

        if (name === "" || name.length === 0) {
            console.error("CookieManager.getCookie(name): Usage error - come on, I need the name of the cookie to set!");
            return null;
        }

        // Local vars for override
        let localExpiryTime = this.expiryTimeInSeconds;
        if (expiryTimeInSeconds != null) {
            const now = new Date();
            localExpiryTime = new Date(now.getTime() + (expiryTimeInSeconds * 1000));;
        }

        let localPath = this.path;
        if (path != null) {
            localPath = path;
        }

        let localDomain = this.domain;
        if (domain != null) {
            localDomain = domain;
        }

        const cookie = `${name}=${value};expires=${localExpiryTime.toUTCString()};path=${localPath};domain=${localDomain};${this.secure}`;
        document.cookie = cookie;

    }
    // - - - - - - - - - - - - - - - - - - - - - - - -


    get(name: string): string | undefined {
        return this.getCookie(name);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    getCookie(name: string): string | undefined {
        if (name === "" || name.length === 0) {
            console.error("CookieManager.getCookie(name): Usage error - come on, I need the name of the cookie to get!");
            return undefined;
        }
        const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return cookieValue ? cookieValue.pop() : undefined;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -


    del(name: string) { this.deleteCookie(name); }
    rem(name: string) { this.deleteCookie(name); }
    remove(name: string) { this.deleteCookie(name); }
    delete(name: string) { this.deleteCookie(name); }
    deleteCookie(name: string) {
        if (name === "" || name.length === 0) {
            console.error("CookieManager.deleteCookie(name): Usage error - come on, I need the name of the cookie to delete!");
            return undefined;
        }
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -


    logCookies(): void {
        const cookies: string[] = document.cookie.split(";");

        console.log("\nCookies:");
        for (let i = 0; i < cookies.length; i++) {
            console.log(cookies[i]);
        }
    }


}
