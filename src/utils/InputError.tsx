interface Props {
  errorMessage: string | undefined;
}

export default function InputError({ errorMessage }: Props) {
  return (
    <span className="text-[12px] md:text-[10px] text-[red] font-medium">
      {errorMessage ? errorMessage : null}
    </span>
  );
}
