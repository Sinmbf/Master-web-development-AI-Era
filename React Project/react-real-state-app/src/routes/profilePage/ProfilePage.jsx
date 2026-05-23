import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";

const ProfilePage = () => {
  return (
    <div className="flex w-full h-full flex-col lg:flex-row">
      {/* User Details */}
      <div className="lg:flex-3 lg:overflow-y-scroll scrollbar-thin lg:h-screen h-full">
        {/* Wrapper */}
        <div className="lg:pr-10 flex flex-col gap-3">
          {/* Title */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">User Information</h1>
            <button className="md:block hidden px-6 py-3 bg-[#fece51] cursor-pointer hover:bg-yellow-500 transition-colors duration-300 border-0 text-sm">
              Update Profile
            </button>
          </div>
          {/* User Information Container */}
          <div className="flex flex-col gap-4 text-sm">
            <span className="informationSpan">
              <b>Avatar: </b>
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="w-10 h-10 object-cover rounded-full"
              />
            </span>
            <span className="informationSpan">
              <b>Username: </b>John Doe
            </span>
            <span className="informationSpan">
              <b>Email: </b>john@gmail.com
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-semibold">My List</h1>
            <button className="md:block hidden px-6 py-3 bg-[#fece51] cursor-pointer hover:bg-yellow-500 transition-colors duration-300 border-0 text-sm">
              Create New Post
            </button>
          </div>
          <List />
          <div className="">
            <h1 className="text-2xl font-semibold mt-5">Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      {/* Chat Container */}
      <div className="lg:flex-2 bg-[#FCF5F3] lg:h-full mt-5 lg:mt-0">
        {/* Wrapper */}
        <div className="px-5 py-2 lg:h-full">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
