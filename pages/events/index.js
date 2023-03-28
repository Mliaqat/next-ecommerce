import EventList from '../../component/event/event-list';
import { DUMMY_EVENTS } from "../../dummy-data";

function events() {
    const events = DUMMY_EVENTS;
  return <EventList items={events} />;
}

export default events;
 