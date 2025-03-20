import Image from 'next/image';

const GitCollaboration = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-5xl font-bold px-20">Collaborate via Git</h2>
        <p className="text-gray-600 text-lg mt-4 px-20">
          Or any version control system of your choice
        </p>
        <p className="text-gray-500 mt-2 px-20">
          Bruno is a Fast and Git-Friendly Opensource API client, aimed at
          revolutionizing the status quo represented by Postman, Insomnia, and
          similar tools out there.
        </p>
      </div>

      {/* Right Image */}
      <div className="relative md:w-1/2">
        <Image
          src="/Screenshot.png"
          alt="Git Collaboration Screenshot"
          width={600}
          height={350}
          className="rounded-lg shadow-lg"
        />
        {/* Floating Logos */}
        <div className="absolute -top-6 right-0">
          <Image src="/logos/bitbucket.png" alt="Bitbucket" width={150} height={150} className="rounded-full object-cover" />
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <Image src="/logos/gitlab.png" alt="GitLab" width={150} height={150} className="rounded-full"/>
        </div>
        <div className="absolute -bottom-6 right-0">
          <Image src="/logos/github.png" alt="GitHub" width={150} height={150} className="rounded-full "/>
        </div>
      </div>
    </section>
  );
};

export default GitCollaboration;
