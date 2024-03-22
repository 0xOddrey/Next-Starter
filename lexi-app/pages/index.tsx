import useSWR from "swr";
import PersonComponent from "../components/Person";
import type { Person } from "../interfaces";
import { useCount, useDispatchCount } from "../components/Counter";
import type { MouseEvent } from "react";


const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
  const count = useCount();
  const dispatch = useDispatchCount();

  const handleIncrease = (event: MouseEvent<HTMLButtonElement>) =>
    dispatch({
      type: "INCREASE",
    });
  const handleDecrease = (event: MouseEvent<HTMLButtonElement>) =>
    dispatch({
      type: "DECREASE",
    });

  const { data, error, isLoading } = useSWR<Person[]>("/api/people", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div>
       <p>Counter: {count}</p>
       <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    <ul>
      {data.map((p) => (
        <PersonComponent key={p.id} person={p} />
      ))}
    </ul>
    </div>
  );
}
