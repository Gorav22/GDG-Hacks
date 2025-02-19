import React from "react";

const Features = () => {
  const features = [
    {
      icon: "fas fa-brain",
      title: "AI-Powered Insights",
      description:
        "Get intelligent summaries, key takeaways, and personalized reading recommendations powered by advanced AI.",
    },
    {
      icon: "fas fa-sync-alt",
      title: "Cross-Device Sync",
      description:
        "Seamlessly continue your reading journey across all your devices with real-time synchronization.",
    },
    {
      icon: "fas fa-users",
      title: "Community Features",
      description:
        "Connect with fellow readers, share insights, and participate in engaging book discussions.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Key Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Experience the future of digital reading with our innovative features
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow rounded-lg transform transition-transform hover:scale-105 duration-300"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <i className={`${feature.icon} text-2xl text-custom`}></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;