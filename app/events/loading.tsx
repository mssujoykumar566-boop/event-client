import EventSkeleton from "@/src/components/EventSkeleton";

export default function Loading() {
  return (
    <main
      className="
max-w-7xl
mx-auto
px-6
py-12
"
    >
      <h1
        className="
text-4xl
font-bold
mb-8
"
      >
        Explore Events
      </h1>

      <div
        className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
      >
        {Array.from({
          length: 8,
        }).map((_, index) => (
          <EventSkeleton key={index} />
        ))}
      </div>
    </main>
  );
}
