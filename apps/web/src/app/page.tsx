import Jumbotron from "./components/Jumbotron";
import SearchByCategory from "./components/SearchByCategory";
import SearchByLocation from "./components/SearchByLocation";
import UpcomingEvents from "./components/UpcomingEvents";

export default function Home() {
  return (
    <main>
      <Jumbotron/>
      <UpcomingEvents/>
      <SearchByCategory/>
      <SearchByLocation/>
    </main>
  )
}
