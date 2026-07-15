import EventCard from "@/src/components/EventCard";
import { Event } from "@/src/types/event";
const API_URL =
  process.env.BACKEND_API_URL ?? "https://event-server-nvtu.onrender.com/api";

interface SearchParams {
  search?: string;
  category?: string;
  location?: string;
  sort?: string;
  page?: string;
}



interface Pagination {
  totalPages: number;
}

interface EventsResponse {
  events: Event[];
  pagination: Pagination;
}

async function getEvents(
  search?: string,
  category?: string,
  location?: string,
  sort?: string,
  page: number = 1,
): Promise<EventsResponse> {
  const params = new URLSearchParams();

  if (search) params.append("search", search);

  if (category) params.append("category", category);

  if (location) params.append("location", location);

  if (sort) params.append("sort", sort);

  params.append("page", String(page));
  params.append("limit", "8");

  const res = await fetch(`${API_URL}/events?${params.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      events: [],
      pagination: {
        totalPages: 1,
      },
    };
  }

  return res.json();
}

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const currentPage = Number(params.page) || 1;

  const result = await getEvents(
    params.search,
    params.category,
    params.location,
    params.sort,
    currentPage,
  );

  const events = result.events;

  const pagination = result.pagination;

  const createQuery = (page: number) => {
    const query = new URLSearchParams();

    if (params.search) {
      query.set("search", params.search);
    }

    if (params.category) {
      query.set("category", params.category);
    }

    if (params.location) {
      query.set("location", params.location);
    }

    if (params.sort) {
      query.set("sort", params.sort);
    }

    query.set("page", String(page));

    return `/events?${query.toString()}`;
  };

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

      <form
        method="GET"
        className="
        grid
        grid-cols-1
        md:grid-cols-5
        gap-4
        mb-10
        "
      >
        <input
          name="search"
          defaultValue={params.search ?? ""}
          placeholder="Search events..."
          className="
          border
          rounded-xl
          px-4
          py-3
          "
        />

        <select
          name="category"
          defaultValue={params.category ?? ""}
          className="
          border
          rounded-xl
          px-4
          py-3
          "
        >
          <option value="">All Category</option>

          <option value="Technology">Technology</option>

          <option value="Business">Business</option>

          <option value="Design">Design</option>
        </select>

        <select
          name="location"
          defaultValue={params.location ?? ""}
          className="
          border
          rounded-xl
          px-4
          py-3
          "
        >
          <option value="">All Location</option>

          <option value="Dhaka">Dhaka</option>

          <option value="Online">Online</option>
        </select>

        <select
          name="sort"
          defaultValue={params.sort ?? ""}
          className="
          border
          rounded-xl
          px-4
          py-3
          "
        >
          <option value="">Sort By</option>

          <option value="newest">Newest</option>

          <option value="price-low">Price Low</option>

          <option value="price-high">Price High</option>
        </select>

        <button
          className="
          bg-blue-600
          text-white
          rounded-xl
          px-6
          py-3
          "
        >
          Search
        </button>
      </form>

      {events.length === 0 ? (
        <div className="text-center py-20 text-gray-500">No events found</div>
      ) : (
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            "
        >
          {events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}

      {pagination.totalPages > 1 && (
        <div
          className="
          flex
          justify-center
          gap-3
          mt-12
          "
        >
          {Array.from(
            {
              length: pagination.totalPages,
            },
            (_, i) => i + 1,
          ).map((page) => (
            <a
              key={page}
              href={createQuery(page)}
              className={
                currentPage === page
                  ? "px-4 py-2 bg-blue-600 text-white rounded-lg"
                  : "px-4 py-2 border rounded-lg"
              }
            >
              {page}
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
