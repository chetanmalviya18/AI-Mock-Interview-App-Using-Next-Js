import React from "react";

function HowItWork() {
  return (
    <section class="pb-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center  lg:px-12">
      <h2 class="font-bold text-3xl">How it Works?</h2>
      <h2 class="text-md text-gray-500">
        Give mock interview in just 3 simplar easy step
      </h2>
      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <a
          class="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-darkBlue/10 hover:shadow-darkBlue/10"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-atom h-8 w-8"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path>
            <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path>
          </svg>
          <h2 class="mt-4 text-xl font-bold text-black">
            Write promot for your form
          </h2>
          <p class="mt-1 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
          </p>
        </a>
        <a
          class="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-darkBlue/10 hover:shadow-darkBlue/10"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-square-pen h-8 w-8"
          >
            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
          </svg>
          <h2 class="mt-4 text-xl font-bold text-black">Edit Your form </h2>
          <p class="mt-1 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
          </p>
        </a>
        <a
          class="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-darkBlue/10 hover:shadow-darkBlue/10"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-share2 h-8 w-8"
          >
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
          </svg>
          <h2 class="mt-4 text-xl font-bold text-black">
            Share &amp; Start Accepting Responses
          </h2>
          <p class="mt-1 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
          </p>
        </a>
      </div>
      <div class="mt-12 text-center">
        <a
          href="/sign-in"
          class="inline-block rounded bg-darkBlue px-12 py-3 text-sm font-medium text-white transition hover:bg-lightBlue focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
}

export default HowItWork;
