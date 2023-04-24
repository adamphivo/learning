# REACT QUERY

- Server state managment
- Fetching data, error/loading, states, devtools, cache, prefetch
- Autoretry strategy

## Steps

- Install the library
- Create query client
- Apply QueryProvider
- Run useQuery hook (actually fetches data from the server)

## useIsFetching

- useIsFetching is a hook made available by react-query.
- It returns 0 if there are no queries that are currently fetching
- It returns the number of current queries
