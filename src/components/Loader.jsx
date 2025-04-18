import { Spinner } from '@heroui/react';

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-96">
      <Spinner size="lg" variant="gradient" />
    </div>
  );
}
