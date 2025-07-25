const TeamCard = ({ name, role, image, bio }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img 
        src={image} 
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-blue-600 mb-2">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;