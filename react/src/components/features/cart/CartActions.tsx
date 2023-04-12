interface Props {
  handleClear: () => void;
}
export default function CartActions({ handleClear }: Props) {
  return (
    <>
      <button onClick={() => handleClear()}>Clear</button>
    </>
  );
}
