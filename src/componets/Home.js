import { useAuth } from "../context/authContext";

function Home() {
  const { user, logout, Loading } = useAuth();

  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (Loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="w-full max-w-xs m-auto text-black">
        <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
        <h1 className=" text-x1 mb-4" >Welcome {user.displayName || user.email} </h1>

<button onClick={handleLogOut} className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black">Log Out</button>
        </div>
      
    </div>
  );
}

export default Home;
