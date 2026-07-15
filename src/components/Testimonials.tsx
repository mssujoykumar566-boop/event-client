"use client";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Event Organizer",
    message:
      "EventFlow helped me organize multiple events easily. The dashboard and management tools save a lot of time.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },

  {
    name: "David Wilson",
    role: "Conference Participant",
    message:
      "Finding and registering for events has become much easier. The search and filtering features are excellent.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },

  {
    name: "Nadia Karim",
    role: "Business Owner",
    message:
      "The platform provides everything needed to manage professional events and connect with audiences.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="text-center max-w-2xl mx-auto">
          <h2
            className="
text-3xl
md:text-4xl
font-bold
text-slate-900
"
          >
            What Our Users Say
          </h2>

          <p
            className="
mt-3
text-slate-600
"
          >
            Trusted by event organizers and participants around the world.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
mt-12
grid
gap-6
md:grid-cols-3
"
        >
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
rounded-2xl
border
border-slate-200
bg-white
p-6
shadow-sm
hover:shadow-md
transition
"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="
h-14
w-14
rounded-full
object-cover
"
                />

                <div>
                  <h3
                    className="
font-semibold
text-slate-900
"
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
text-sm
text-slate-500
"
                  >
                    {item.role}
                  </p>
                </div>
              </div>

              <p
                className="
mt-5
leading-7
text-slate-600
"
              >
                {item.message}
              </p>

              <div
                className="
mt-4
text-yellow-500
"
              >
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
