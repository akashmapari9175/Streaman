import Image from 'next/image';

const trustedCompanies = [
  { name: 'GitHub', logo: '/logos/github.png' },
  { name: 'CapitalOne', logo: '/logos/capitalone.png' },
  { name: 'Mercedes-Benz', logo: '/logos/mercedes.jpg' },
  { name: 'COMCAST', logo: '/logos/comcast.png' },
  { name: 'FedEx', logo: '/logos/fedex.png' },
  { name: 'TESCO', logo: '/logos/tesco.svg' },
];

const TrustedBy = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-5xl font-bold mb-6 pb-20">Trusted by</h2>
      <div className="flex flex-wrap justify-center gap-16">
        {trustedCompanies.map((company) => (
          <Image key={company.name} src={company.logo} alt={company.name} width={120} height={60} />
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
