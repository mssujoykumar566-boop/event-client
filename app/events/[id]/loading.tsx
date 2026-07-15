import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <main
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-slate-50
      "
    >
      <div
        className="
        flex
        flex-col
        items-center
        gap-5
        rounded-2xl
        border
        bg-white
        px-10
        py-8
        shadow-sm
        "
      >
        <Spinner size="lg" />

        <div className="text-center">
          <h2
            className="
            text-lg
            font-semibold
            text-slate-900
            "
          >
            Loading Event Details
          </h2>

          <p
            className="
            mt-2
            text-sm
            text-slate-500
            "
          >
            Please wait while we fetch event information...
          </p>
        </div>
      </div>
    </main>
  );
}
