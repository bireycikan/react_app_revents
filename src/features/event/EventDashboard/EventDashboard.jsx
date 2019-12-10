import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";

const eventsFromDashboard = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27T11:00:00+00:00",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Rick",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/17.jpg",
    attendees: [
      {
        id: "a",
        name: "Martin",
        photoURL: "https://randomuser.me/api/portraits/men/18.jpg"
      },
      {
        id: "b",
        name: "Jack",
        photoURL: "https://randomuser.me/api/portraits/men/19.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28T14:00:00+00:00",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tommy",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/16.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/15.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/14.jpg"
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events: eventsFromDashboard,
    isOpen: false
  };

  handleIsOpenToggle = () => {
    // Using setState in this way, we guarentee that the operation will be synchronous!!!
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  render() {
    const { events, isOpen } = this.state;

    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList events={events} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button
              onClick={this.handleIsOpenToggle}
              positive
              content='Create Event'
            />
            {isOpen && <EventForm cancelFormOpen={this.handleIsOpenToggle} />}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default EventDashboard;
