import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React, { ReactNode } from 'react';

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
});

interface ApolloProviderWrapperProps {
    children: ReactNode;
}

const ApolloProviderWrapper: React.FC<ApolloProviderWrapperProps> = ({ children }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
};

export default ApolloProviderWrapper;
