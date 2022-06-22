import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4on3nmw0jza01z4hjmm6gvw/master',
    cache: new InMemoryCache()
})