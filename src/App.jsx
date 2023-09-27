// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGobalContext } from "./Context";

function App() {
  const { loading } = useGobalContext();
  if (loading) {
    return <main>
      <div className="loading" style={{marginTop : '6rem'}}></div>
    </main>;
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
