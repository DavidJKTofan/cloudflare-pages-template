# cloudflare-pages-template

Get started with [Cloudflare Pages](https://pages.cloudflare.com/) by deploying this pretty template on your own account, and start playing around.

## Step 1

Clone this Repository to your own GitHub account. 

Or download this Repository as a ZIP file by clicking the green button that says "<> Code" and clicking "Download ZIP", then extract the contents to a new folder, and upload the content (and only the content; not the folder) of that folder to a new GitHub Repository.

## Step 2

Access your _free_ Cloudflare account ([new to Cloudflare?](https://developers.cloudflare.com/fundamentals/get-started/)), and go to the Pages tab.

![pages-tab](/img/readme-img/pages-tab.png)

## Step 3

Go to your Cloudflare Dashboard. Click on the blue "Create a project" button, and select "Connect to Git".

## Step 4

Connect your GitHub account, select your Repository, and click "Begin setup".

![github-deploy](/img/readme-img/github-deploy.png)

## Step 5

If you want, you can update some content, including the [index.html](index.html).

You might want to update the following files with your own parameters:
- [robots.txt](robots.txt)
- [sitemap.xml](sitemap.xml)

## Step 6

Just hit "Save and Deploy" and let the magic happen! ✨

![success](/img/readme-img/success.png)

## Step 7

Share your beautiful website with the world. 🤓

==> https://cloudflare-pages-template.pages.dev/ (_your link might look different_)

## Step 8 (Metadata)

Added `Functions/_middleware.js` from the GitHub Repo [Dynamic Social Previews Meta Tags with Cloudflare Pages](https://github.com/pew/cloudflare-pages-social-preview), in order to add Meta Tags.

Don't forget to edit the file [_middleware.js](functions/_middleware.js) with your own title, description, and such.

## More (Optional) Steps

[Add custom headers to create Content Security Policies (CSP) and more](https://developers.cloudflare.com/pages/platform/headers/)

[Add a custom domain to a branch](https://developers.cloudflare.com/pages/how-to/custom-branch-aliases/).

![custom-domains](/img/readme-img/custom-domains.png)

[Redirecting www to domain apex](https://developers.cloudflare.com/pages/how-to/www-redirect/)

[Cloudflare Pages gets even faster with Early Hints](https://blog.cloudflare.com/early-hints-on-cloudflare-pages/)

[Build full-stack applications by executing code on the Cloudflare network with help from Cloudflare Workers](https://developers.cloudflare.com/pages/platform/functions/)

# Disclaimer

This is a general introduction to Cloudflare Pages. 

Educational purposes only. This repo does not reflect the opinions of, and is not affiliated with Cloudflare. 
Screenshots are taken from the Cloudflare dashboard.
