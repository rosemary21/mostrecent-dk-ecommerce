import { useCountUp as Count } from "use-count-up";

interface Props {
  duration: number;
  end: number;
  onComplete?: () => void;
}

export default function useCountUp({ duration, end, onComplete }: Props) {
  const { value } = Count({
    isCounting: true,
    end,
    duration,
    thousandsSeparator: ",",
    onComplete,
  });
  return value;
}
