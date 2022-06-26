import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4tzgjnf0ee901udg30j7flz/master',
    cache: new InMemoryCache()
})