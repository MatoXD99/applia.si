import Header from "./Header.js";
import { MailIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "who are we", href: "/whoarewe" },
  { name: "what we offer", href: "/whatweoffer" },
  { name: "what we use", href: "/whatweuse" },
  { name: "contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Heading() {
  return (
    <div className="bg-white">
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-gray-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                    <span className="block text-white text-center">
                      UI/UX, web and
                    </span>
                    <span className="block text-white text-center">
                      mobile aplications
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
