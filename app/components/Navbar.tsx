const Navbar = () => {
    return (
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-full mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">Facebook</div>
          <div className="space-x-4">
            <button className="bg-blue-700 px-4 py-2 rounded">Home</button>
            <button className="bg-blue-700 px-4 py-2 rounded">Messages</button>
            <button className="bg-blue-700 px-4 py-2 rounded">Notifications</button>
            <button className="bg-blue-700 px-4 py-2 rounded">Profile</button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;