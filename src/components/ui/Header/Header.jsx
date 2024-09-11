import Head from "./components/Head";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#F8FAFB" }}>
      <div className="py-4">
        <div className="container mx-auto" style={{ color: "#495057" }}>
          <div className="flex items-center justify-between">
            <div className="flex-grow">
              <ul className="flex flex-grow space-x-6 items-center font-light text-sm">
                <li className="flex items-center">
                  <i className="bi bi-telephone text-xl mx-2"></i>
                  020-800-456-747
                </li>
                <li className="pl-6 border-l border-gray-200">
                  Free shipping on orders over $300
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-10 py-5 mx-auto">
        <Head />
      </div>
    </header>
  );
};

export default Header;
