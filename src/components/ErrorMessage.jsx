export default function ErrorMessage({ children }) {
  return (
    <div className="flex justify-center items-center text-red-500 text-sm mt-1">
      <p>{children}</p>
    </div>
  );
}
