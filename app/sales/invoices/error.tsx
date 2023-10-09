"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col  max-w-md mx-auto justify-center h-full bg-red-300 border-red-700 border-[1px]">
      <div className="flex flex-col p-5">
        <h2 className="text-red-500 text-xl font-bold text-center mb-4">
          Something went wrong - {error.message}
        </h2>
        <button
          type="button"
          className="p-2 bg-red-200 border-[1px] border-red-700"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
