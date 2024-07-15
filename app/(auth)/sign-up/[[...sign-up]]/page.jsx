import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1616531770192-6eaea74c2456?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 sm:h-10"
                viewBox="0 0 28 24"
                version="1.1"
              >
                <g transform="matrix(1,0,0,1,0,0)">
                  <path
                    d="M14.086,19.414c.392,.392,.905,.586,1.418,.586,.509,0,1.017-.191,1.399-.575l2.793-2.707c.396-.384,.406-1.018,.021-1.414-.386-.396-1.018-.406-1.414-.021l-2.814,2.707-1.674-1.623c2.359-1.509,3.966-3.933,4.162-6.715,.185-2.613-.768-5.17-2.613-7.015C13.519,.791,10.959-.165,8.349,.023,3.823,.343,0,4.589,0,9.296v5.038c0,2.021,1.643,3.666,3.661,3.666h4.477c1.336,0,2.614-.244,3.782-.685l2.166,2.099Zm-10.425-3.414c-.916,0-1.661-.747-1.661-1.666v-5.038c0-3.696,2.972-7.029,6.489-7.278,.167-.012,.333-.018,.498-.018,1.859,0,3.645,.732,4.962,2.051,1.436,1.435,2.176,3.425,2.033,5.46-.253,3.578-3.772,6.489-7.845,6.489H3.661ZM11.953,6.466c.224,1.271-.381,2.542-1.506,3.163-.447,.246-.447,.318-.447,.371,0,.553-.447,1-1,1s-1-.447-1-1c0-1.308,1.038-1.879,1.481-2.123,.289-.16,.595-.535,.502-1.065-.069-.393-.402-.726-.793-.794-.31-.058-.603,.021-.832,.216-.228,.19-.358,.47-.358,.767,0,.553-.447,1-1,1s-1-.447-1-1c0-.889,.391-1.727,1.072-2.299,.681-.572,1.578-.814,2.464-.653,1.21,.211,2.205,1.206,2.417,2.418Zm-1.703,6.784c0,.69-.56,1.25-1.25,1.25s-1.25-.56-1.25-1.25,.56-1.25,1.25-1.25,1.25,.56,1.25,1.25Zm13.75,2.75v5c0,1.657-1.343,3-3,3h-5c-2.955,0-5.535-1.615-6.92-4.004,.769-.006,1.518-.091,2.242-.248,1.101,1.371,2.787,2.252,4.678,2.252h5c.552,0,1-.448,1-1v-5c0-1.891-.881-3.577-2.252-4.678,.156-.724,.242-1.473,.248-2.242,2.389,1.385,4.004,3.965,4.004,6.92Z"
                    fill="#ffffffff"
                    data-original-color="#000000ff"
                    stroke="none"
                  />
                </g>
              </svg>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to PrepView
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              PrepView is an AI-driven mock interview app offering realistic
              practice and personalized feedback, ensuring you're prepared for
              any job interview.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to PrepView
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
            <SignUp />;
          </div>
        </main>
      </div>
    </section>
  );
}
