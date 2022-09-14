//apitoken: `skNUiiAlCrHDp0qMGMjSJIlI2kwQPlZQzbWBecxjo0Ha73cs9dIWY9KCIqH8CM52v22Ym2MYEKmNXTR3VAu3JJzUKq11lRNWtSPuR0A7inlReGmnozpSBOmVujzdrbhpWZoWXby3bYZd7vT2CL3jCPZWXxjsYl6LecAPOaFl66klxOCOLlKW`
//projectid: 'mbi7qz4z'

import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'mbi7qz4z',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'skNUiiAlCrHDp0qMGMjSJIlI2kwQPlZQzbWBecxjo0Ha73cs9dIWY9KCIqH8CM52v22Ym2MYEKmNXTR3VAu3JJzUKq11lRNWtSPuR0A7inlReGmnozpSBOmVujzdrbhpWZoWXby3bYZd7vT2CL3jCPZWXxjsYl6LecAPOaFl66klxOCOLlKW',
    useCdn: false
})