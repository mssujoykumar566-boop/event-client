import { Skeleton } from "@heroui/react";

export default function EventSkeleton() {
  return (
    <div
      className="
      bg-white
      border
      rounded-2xl
      overflow-hidden
      p-5
      shadow-sm
      "
    >
      {/* Image */}
      <Skeleton
        className="
        rounded-xl
        h-52
        w-full
        "
      />

      {/* Title */}
      <Skeleton
        className="
        mt-5
        rounded-lg
        h-6
        w-3/4
        "
      />

      {/* Description */}
      <div
        className="
        mt-4
        space-y-3
        "
      >
        <Skeleton
          className="
          h-3
          rounded-lg
          "
        />

        <Skeleton
          className="
          h-3
          rounded-lg
          w-5/6
          "
        />
      </div>

      {/* Meta */}
      <div
        className="
        mt-5
        space-y-3
        "
      >
        <Skeleton
          className="
          h-4
          rounded-lg
          w-1/2
          "
        />

        <Skeleton
          className="
          h-4
          rounded-lg
          w-2/3
          "
        />
      </div>

      {/* Button */}
      <Skeleton
        className="
        mt-6
        h-10
        rounded-xl
        "
      />
    </div>
  );
}
