type LabelProps = {
  label: string;
};

export const Label = ({ label }: LabelProps) => {
  return (
    <h2 className="font-semibold mb-4 text-sm text-black dark:text-white">
      {label}
    </h2>
  );
};