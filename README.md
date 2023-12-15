# LESSONS

- Next.js Tutorial - 56 - App Layout
- Next.js Tutorial - 57 - Head Component
- Next.js Tutorial - 58 - Image Component
- Next.js Tutorial - 58 - Image Component
- Next.js Tutorial - 59 - Absolute Imports & Module Paths
- Next.js Tutorial - 60 - Static HTML Export
- Next.js Tutorial - 61 - TypeScript Support
- Next.js Tutorial - 62 - Preview Mode
- Next.js Tutorial - 63 - Redirects
- Next.js Tutorial - 64 - Environment Variables

## HEAD/METADATA REFERENCES 

### App Router Incremental Adoption Guide

https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-3-migrating-nexthead

### Metadata Object and generateMetadata Options

https://nextjs.org/docs/app/api-reference/functions/generate-metadata

### opengraph-image and twitter-image

https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#image-files-jpg-png-gif

## IMAGE PLACEHOLDER PROPS

for static images

    placeholder='blur'

for dynamic images

    plaaceholder='blur' blurDataURL=''
    
## BULD AND DEPLOYMENT

- next build: build the app (to be run on a node server)
- next start: run the built app (on a node server)
- next export: export to static files 

## REDIRECT 

`next.config.js`
<pre>

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: { unoptimized: true },
    redirects: async () => {
        return [
            {
                source: '/about',
                destination: '/',
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig

</pre>

## ENVIROMENT VARIABLES (PAGE ROUTER)

.env variable can't be printed out to the browser unless prefixed by `NEXT_PUBLIC`