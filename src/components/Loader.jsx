import { Spinner } from '@heroui/react';

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-48">
      <Spinner variant="gradient" />
    </div>
  );
}
