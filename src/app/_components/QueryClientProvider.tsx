"use client";
import {
  Mutation,
  MutationCache,
  Query,
  QueryCache,
  QueryClient,
  QueryClientProvider,
  defaultShouldDehydrateQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      // 에러 전파를 위한 설정.
      queries: {
        throwOnError: false,
        refetchOnMount: true,

        staleTime: 60 * 1000,
      },

      dehydrate: {
        // include pending queries in dehydration
        shouldDehydrateQuery: (query) => defaultShouldDehydrateQuery(query) || query.state.status === "pending",
      },
    },
  }); // QueryClient 상태 초기화
}

let browserQueryClient: QueryClient | undefined = undefined;
function getQueryClient() {
  if (typeof window === "undefined") {
    // Server일 경우
    // 매번 새로운 queryClient를 만든다.
    return makeQueryClient();
  } else {
    // Browser일 경우
    // queryClient가 존재하지 않을 경우에만 새로운 queryClient를 만든다.
    // React가 새 Client를 만들게 하기 위해 중요하다.
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export const queryClient = new QueryClient();
export default function QueryClientBoundary({ children }: React.PropsWithChildren) {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
