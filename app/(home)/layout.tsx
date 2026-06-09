// import Navbar from "../Pages/Navbar/Navbar";
// import Navbar from


import Footer from "../components/Footer/Footer";


const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="bg-[#efefec]">
        
            {/* <Navbar /> */}
            {children}
            <Footer />
            
            
        </div>
    );
};

export default DashboardLayout;
