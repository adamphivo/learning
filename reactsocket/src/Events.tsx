interface Props {
  events: string[];
}

export function Events({ events }: Props) {
  return (
    <ul>
      {events.map((event, index: number) => (
        <li key={index}>{event}</li>
      ))}
    </ul>
  );
}
