interface Certificate {
  id: number;
  name: string;
  image: string;
  description: string;
  issuer: string;
  date: string;
}

interface CertificateCardProps {
  certificate: Certificate;
  onClick: (certificate: Certificate) => void;
}

const CertificateCard = ({ certificate, onClick }: CertificateCardProps) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden border border-sage/20"
      onClick={() => onClick(certificate)}
    >
      <div className="aspect-[4/3] bg-sage/10">
        <img 
          src={certificate.image} 
          alt={certificate.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-espresso mb-2">{certificate.name}</h3>
        <p className="text-olive text-sm">{certificate.issuer}</p>
        <p className="text-olive/70 text-xs mt-1">{certificate.date}</p>
      </div>
    </div>
  );
};

export default CertificateCard;