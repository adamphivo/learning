import { useIsFetching } from "@tanstack/react-query";

export default function Loading() {
  const isFetching = useIsFetching();

  return <>{isFetching !== 0 && <div>Loading</div>}</>;
}
