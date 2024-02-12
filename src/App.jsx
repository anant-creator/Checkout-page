import CheckoutForm from "./components/CheckoutForm";
import NavigationBar from "./components/NavigationBar";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/owl.carousel.min.js';


export default function App() {
  return (
    <main>
      <NavigationBar/>
      <CheckoutForm/>
    </main>
  )
}