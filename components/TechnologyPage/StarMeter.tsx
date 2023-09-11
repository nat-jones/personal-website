import { Star } from 'tabler-icons-react';

export default function StarMeter({ num }: { num: number }) {
  const starArr = ['1', '2', '3', '4'];
  return (
    <div>
      {starArr.map((e, i) => {
        if (i < num) {
          return (
            <Star
              key={e}
              size={24}
              strokeWidth={1}
              color="black"
              fill="#FFF3BF"
            />
          );
        }
        return <Star key={e} size={24} strokeWidth={1} color="black" />;
      })}
    </div>
  );
}
