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
      "User experience has changed dramatically in recent times. With the progress of technology, the once simple mediums of websites and apps transformed from very simple one-way streets, into rich and interactive experiences. Today the art of UX is more about how we make the user feel when using your product, and the simplicity of its use.",
    icon: CloudUploadIcon,
  },
  {
    name: "Mobile development",
    description:
      "User experience has changed dramatically in recent times. With the progress of technology, the once simple mediums of websites and apps transformed from very simple one-way streets, into rich and interactive experiences. Today the art of UX is more about how we make the user feel when using your product, and the simplicity of its use.",
    icon: LockClosedIcon,
  },
  {
    name: "Web development",
    description:
      "User experience has changed dramatically in recent times. With the progress of technology, the once simple mediums of websites and apps transformed from very simple one-way streets, into rich and interactive experiences. Today the art of UX is more about how we make the user feel when using your product, and the simplicity of its use.",
    icon: LockClosedIcon,
  },
  {
    name: "Application / website hosting",
    description:
      "User experience has changed dramatically in recent times. With the progress of technology, the once simple mediums of websites and apps transformed from very simple one-way streets, into rich and interactive experiences. Today the art of UX is more about how we make the user feel when using your product, and the simplicity of its use.",
    icon: RefreshIcon,
  },
  {
    name: "Powerful API",
    description:
      "User experience has changed dramatically in recent times. With the progress of technology, the once simple mediums of websites and apps transformed from very simple one-way streets, into rich and interactive experiences. Today the art of UX is more about how we make the user feel when using your product, and the simplicity of its use.",
    icon: CogIcon,
  },
];

export default function Feature() {
  return (
    <div className="relative  py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Services we offer
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          We are a small company with a big vision and futuristic plans for our
          growths and excelent service
        </p>
        <div className="mt-12">
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
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
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
    </div>
  );
}