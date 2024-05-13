'use client'
import Jumbotron from "../components/Jumbotron";
import RegisterAsOrganizer from "../components/RegisterAsOrganizer";
import SearchByCategory from "../components/SearchByCategory";
import SearchByLocation from "../components/SearchByLocation";
import UpcomingEvents from "../components/UpcomingEvents";
import { useAppSelector } from "../redux/hook";

export default function Home() {
  return (
    <main>
      <Jumbotron/>
      <RegisterAsOrganizer/>
      <UpcomingEvents/>
      <SearchByCategory/>
      <SearchByLocation/>
    </main>
  )
}
