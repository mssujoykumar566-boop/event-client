export default function AboutPage() {
  return (
    <main
      className="
max-w-5xl
mx-auto
px-6
py-16
"
    >
      <h1
        className="
text-4xl
font-bold
mb-6
"
      >
        About EventSphere
      </h1>

      <p
        className="
text-gray-600
leading-8
"
      >
        EventSphere is a modern event management platform that helps users
        discover, join, and manage events easily. Organizers can create events
        and manage participants while users can explore events based on their
        interests.
      </p>

      <div
        className="
grid
md:grid-cols-3
gap-6
mt-10
"
      >
        <div
          className="
border
rounded-2xl
p-6
"
        >
          <h2 className="font-bold text-xl">Discover Events</h2>

          <p className="text-gray-600 mt-3">
            Find technology, business, education and other exciting events.
          </p>
        </div>

        <div
          className="
border
rounded-2xl
p-6
"
        >
          <h2 className="font-bold text-xl">Easy Management</h2>

          <p className="text-gray-600 mt-3">
            Organizers can create and manage events efficiently.
          </p>
        </div>

        <div
          className="
border
rounded-2xl
p-6
"
        >
          <h2 className="font-bold text-xl">Community</h2>

          <p className="text-gray-600 mt-3">
            Connect with people and join meaningful events.
          </p>
        </div>
      </div>
    </main>
  );
}
