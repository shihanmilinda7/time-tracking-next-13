"use client"
const PersonalDetailCard = () => {
  let userDetails;
  try{
  userDetails = JSON.parse(localStorage.getItem('userDetails') || "");
} catch (error) {}
  return (
    <div className="bg-amber-800 shadow-md rounded-lg overflow-hidden h-96 ">
      <div className="p-4">
        <h2 className="text-3xl font-semibold mb-2 text-white">Personal Details</h2>
        <h3 className="text-xl font-semibold mb-2 text-white">Name - {userDetails.name}</h3>
        <h3 className="text-xl font-semibold mb-2 text-white">Jobrole - {userDetails.jobrole}</h3>
        <h3 className="text-xl font-semibold mb-2 text-white">Company - {userDetails.company}</h3>
      </div>
    </div>
  );
};

export default PersonalDetailCard;