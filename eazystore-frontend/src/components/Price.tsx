type PriceProps = {
  currency: string;
  price: number;
};

export default function Price({ currency, price }: PriceProps) {
  return (
    <>
      {currency}
      <span>{price}</span>
    </>
  );
}
