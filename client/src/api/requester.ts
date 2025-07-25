async function requester<T>(method: string, url: string, data?: any): Promise<T> {

    const option: RequestInit = {
        method,
        headers: {}
    }

    if (data) {
        (option.headers as Record<string, string>)["Content-Type"] = "application/json";
        option.body = JSON.stringify(data)
    }

    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        (option.headers as Record<string, string>)["X-Authorization"] = accessToken;
    }

    try {
        const response = await fetch(url, option);

        if (!response.ok) {
            if (response.status == 403) {
                localStorage.clear();
            }

            const err = await response.json();
            throw new Error(err.message);
        }

        if (response.status == 204) {
            return null as unknown as T
        } else {
            return response.json() as Promise<T>;
        }

    } catch (err) {
        throw err;
    }
}


function get<T>(url: string) {
    return requester<T>("GET", url);
}

function post<T, D = any>(url: string, data: D) {
    return requester<T>("POST", url, data);
}

function put<T, D = any>(url: string, data: D) {
    return requester<T>("PUT", url, data);
}

function del<T>(url: string) {
    return requester<T>("DELETE", url);
}

export {
    get,
    post,
    put,
    del
}