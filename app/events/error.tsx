"use client";

export default function Error() {
  return (
    <div
      className="
min-h-screen
flex
items-center
justify-center
"
    >
      <div
        className="
text-center
"
      >
        <h1
          className="
text-3xl
font-bold
"
        >
          Something went wrong
        </h1>

        <p
          className="
text-gray-500
mt-3
"
        >
          Failed to load events
        </p>

        <button
          onClick={() => {
            window.location.reload();
          }}
          className="
mt-5
bg-blue-600
text-white
px-5
py-2
rounded-xl
"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
