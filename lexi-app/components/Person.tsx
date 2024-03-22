import Link from "next/link";
import { Person } from "../interfaces";
import { useCount } from "./Counter";
type PersonProps = {
  person: Person;
};

export default function PersonComponent({ person }: PersonProps) {
  const count = useCount();

  return (
    <div>


    
    <li>
      <Link href="/person/[id]" as={`/person/${person.id}`}>
        {person.name} {count}
      </Link>
    </li>
    </div>
  );
}
