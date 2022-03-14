import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "UI/UX Design",
    description:
      "Before we go on an adventure, its a must to build a prototype, that will satisfy the costumer. If needed, design can be re-done or changed by customers wishes. That's our goal! Quality apps with quality design.",
    icon: CloudUploadIcon,
  },
  {
    name: "Web development",
    description:
      "Web appliactions are one of most popular ones nowdays. Web apps can be used as on computer and also on mobile, as long as they are were made for mobile too. That's why we focus on that! Making web application friendly for mobile too and then you can do a thing or two with your phone :)",
    icon: LockClosedIcon,
  },
  {
    name: "Mobile development",
    description:
      "Mobile apps are getting more and more popular for it's speed and practicallity. Nowday almost every application also has an mobile app, despite their web application working on mobile. Mobile apps contribute to speed and easy access (even when offline if it's made for that)",
    icon: LockClosedIcon,
  },
  {
    name: "API",
    description:
      "API's are popular nowdays because same API can be used for both, mobile and web applications. Besided, if a change is made on mobile, it will be visible on web immediately, since it's using same database and server.",
    icon: CogIcon,
  },
  {
    name: "Application / API hosting",
    description:
      "Hosting application or API can be rather expensive and hard to do, if host provider has limited functionalities. That's why we offer hosting for such apps. Leave it to us and we will set it up and host it for you.",
    icon: RefreshIcon,
  },
];

export default function Feature() {
  return (
    <div className="relative py-12 sm:py-8 lg:py-24">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                      <feature.icon className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h1 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                    {feature.name}
                  </h1>
                  <p className="mt-5 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
