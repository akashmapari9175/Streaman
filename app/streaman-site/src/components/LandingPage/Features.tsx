import Image from "next/image";

export default function Features() {
  return (
    <section className="grid md:grid-cols-3 gap-8 mt-12 px-4">
      <FeatureCard
        icon="/icons/developer1.svg"
        title="Developer First"
        description="Open-source community and extensibility are our cornerstones. 
        We're proud to be an API-client and commit to not bloating our product with unnecessary platform features."
      />
      <FeatureCard
        icon="/icons/git.jpg"
        title="Native Git Integration"
        description="Collaboration requires context and a shared location. Collections 
        can live directly in your Git provider so they're always versioned."
      />
      <FeatureCard
        icon="/icons/offline.jpg"
        title="Offline Only"
        description="We take security and privacy seriously. Bruno is an offline 
        tool and there is no syncing of your data to any cloud."
      />
    </section>
  );
}

type FeatureProps = {
  icon: string;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
