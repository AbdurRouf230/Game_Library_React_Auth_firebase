import { use } from "react";
import { AuthContext } from "../../AuthContexts/AuthContext";

const Profile = () => {
  const { user } = use(AuthContext);

  return (
    <div className=" bg-black shadow-sm w-11/12 mx-auto mt-2 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-8">
        <div className="flex flex-col items-center text-center">
          <img
            src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-primary object-cover"
          />

          <h2 className="text-2xl font-bold mt-4">
            {user?.displayName || "No Name"}
          </h2>

          <p className="text-gray-500 mt-1">{user?.email}</p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="bg-base-200 rounded-xl p-4">
            <p className="text-sm text-gray-500">User ID</p>
            <p className="font-semibold break-all">{user?.uid}</p>
          </div>

          <div className="bg-base-200 rounded-xl p-4">
            <p className="text-sm text-gray-500">Email Verified</p>
            <p className="font-semibold">
              {user?.emailVerified ? "Verified ✅" : "Not Verified ❌"}
            </p>
          </div>

          <div className="bg-base-200 rounded-xl p-4">
            <p className="text-sm text-gray-500">Account Provider</p>
            <p className="font-semibold">{user?.providerData[0]?.providerId}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
