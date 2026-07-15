"use client";

import { useEffect, useState } from "react";


const API_URL = "/api";



type Event = {
  _id: string;
  title: string;
  image: string;
  location: string;
  price: number;
  date: string;
};



type Registration = {
  event: Event;
};



type JoinedEventsResponse = {
  success: boolean;
  data?: Registration[];
};



export default function JoinedEventsPage() {


  const [events, setEvents] = useState<Event[]>([]);


  const [loading, setLoading] = useState(true);



  useEffect(() => {


    const getJoinedEvents = async () => {


      try {


        const res = await fetch(
          `${API_URL}/registrations/my-events`,
          {
            credentials: "include",
          }
        );


        const data: JoinedEventsResponse =
          await res.json();



        const joinedEvents: Event[] =
          (data.data ?? []).map(
            (item: Registration) => item.event
          );


        setEvents(joinedEvents);



      } catch (error) {


        console.log(error);


      } finally {


        setLoading(false);


      }


    };


    getJoinedEvents();


  }, []);




  if (loading) {

    return (
      <p>
        Loading joined events...
      </p>
    );

  }



  return (
    <div>


      <h1
        className="
        text-3xl
        font-bold
        "
      >
        Joined Events
      </h1>



      {
        events.length === 0 ? (

          <p className="mt-6 text-gray-500">
            You have not joined any event
          </p>

        ) : (


          <div
            className="
            grid
            md:grid-cols-2
            gap-6
            mt-8
            "
          >


            {
              events.map((event: Event) => (


                <div
                  key={event._id}
                  className="
                  bg-white
                  border
                  rounded-xl
                  p-5
                  "
                >


                  <img
                    src={event.image}
                    alt={event.title}
                    className="
                    w-full
                    h-48
                    object-cover
                    rounded-lg
                    "
                  />



                  <h2
                    className="
                    text-xl
                    font-bold
                    mt-4
                    "
                  >
                    {event.title}
                  </h2>



                  <p>
                    📍 {event.location}
                  </p>


                  <p>
                    📅 {new Date(event.date).toLocaleDateString()}
                  </p>


                  <p>
                    💰 ${event.price}
                  </p>



                </div>


              ))
            }


          </div>


        )
      }



    </div>
  );
}
