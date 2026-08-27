const SECURITY_HEADERS = {
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
};

function withHeaders(response, pathname) {
  const headers = new Headers(response.headers);

  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(name, value);
  }

  if (pathname.endsWith(".html") || pathname === "/") {
    headers.set("Cache-Control", "public, max-age=0, must-revalidate");
  } else if (pathname.startsWith("/assets/")) {
    headers.set("Cache-Control", "public, max-age=604800, stale-while-revalidate=86400");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function fetchAsset(env, request, pathname) {
  const assetUrl = new URL(request.url);
  assetUrl.pathname = pathname;
  return env.ASSETS.fetch(new Request(assetUrl, request));
}

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    if (pathname === "/") {
      pathname = "/index.html";
    } else if (!pathname.split("/").pop().includes(".")) {
      pathname = `${pathname.replace(/\/$/, "")}.html`;
    }

    let response = await fetchAsset(env, request, pathname);

    if (response.status === 404 && request.headers.get("accept")?.includes("text/html")) {
      const fallback = await fetchAsset(env, request, "/404.html");
      response = new Response(fallback.body, {
        status: 404,
        headers: fallback.headers,
      });
      pathname = "/404.html";
    }

    return withHeaders(response, pathname);
  },
};

export default worker;
