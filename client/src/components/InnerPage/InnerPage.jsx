import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"


const InnerPage = ({ children }) => {
    return (
        <div className="mainContainer">

            <div>
                <Sidebar />
            </div>


            <main>

                <Header />


                {children}

            </main>

        </div>
    )
}

export default InnerPage