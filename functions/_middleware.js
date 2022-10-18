// Source and credits to: https://github.com/pew/cloudflare-pages-social-preview
class ElementHandler {
  constructor(ogtag) {
    this.ogtag = ogtag
  }
  element(element) {
    element.append(this.ogtag, { html: true })
  }
}

export async function onRequest(context) {
  const { request, next } = context
  const res = await next()
  const { searchParams, pathname } = new URL(request.url)

  if (!(pathname === '/index.html' || pathname === '/')) {
    return res
  }

  // Metatags Variables (edit these!)
  const metatitle = "Cloudflare Pages Template"
  const metadescription = "Get started with Cloudflare Pages by deploying this pretty simple template on your own account, and start playing around."

  let name = searchParams.get('myQuery')
  let ogtag

  // these are the metatags we want to inject into the site
  ogtag = `
    <meta property="og:title" content="${metatitle}" />
    <meta property="og:description" content="${metadescription}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${request.url}" />
    <meta property="og:image" content="${request.url}img/preview.png?${name ? 'myQuery=' + name : 'default'}" />

    <meta property="og:image:height" content="630" />
    <meta property="og:image:width" content="1200" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${metatitle}" />
    <meta name="twitter:description" content="${metadescription}" />

    <meta name="description" content="and even more stuff about my page" />
  `

  return new HTMLRewriter().on('head', new ElementHandler(ogtag)).transform(res)
}