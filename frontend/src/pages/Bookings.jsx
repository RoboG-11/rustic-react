import { HiOutlineCalendarDays } from "react-icons/hi2";

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import AddBooking from "../features/bookings/AddBooking";

function Bookings() {
  return (
    <>
      <Row type="horizontal" $marginTop="6rem">
        <Heading as="h1">
          <span>
            <HiOutlineCalendarDays />
          </span>
          Bookings

        </Heading>

        <AddBooking />

        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
