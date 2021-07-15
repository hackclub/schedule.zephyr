import { Box, Grid, Container, Heading, Card, Text } from 'theme-ui'
import { useState } from 'react'

export default function Hub() {
  const [currentPage, setCurrentPage] = useState('schedule')
  const keyAddresses = [
    {
      label: 'Burlington Airport',
      address: '1200 Airport Dr, South Burlington, VT 05403',
      googleMaps:
        'https://maps.google.com/maps/dir//Terminal,+1200+Airport+Dr,+South+Burlington,+VT+05403,+USA/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cca798f398bccc5:0xaab774bdc03e7f95?sa=X'
    },
    {
      label: 'Hilton Garden Inn Burlington',
      address: '101 Main St, Burlington, VT 05401',
      googleMaps:
        'https://maps.google.com/maps/dir//101+Main+St,+Burlington,+VT+05401,+USA/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cca7af9c1a9d59f:0x8ad2476167d2d907?sa=X'
    },
    {
      label: 'Hack Club HQ Office',
      address: '15 Falls Rd, Shelburne VT 05482',
      googleMaps:
        'https://maps.google.com/maps/dir//15+Falls+Rd,+Shelburne,+VT+05482,+USA/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cca7ddb3da56173:0xa183e5091b2e5388?sa=X'
    },
    {
      label: 'Doubletree Hilton Hotel Times Square, NYC',
      address: '350 W 40th St, New York City, NY 10018-1404',
      googleMaps:
        'https://maps.google.com/maps/dir//350+W+40th+St,+New+York,+NY+10018,+USA/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89c25852ca450c79:0x2189982858e317e4?sa=X'
    },
    {
      label: 'Penn Station, NYC',
      address: '393 7th Ave. New York, NY 10001',
      googleMaps:
        'https://maps.google.com/maps/dir//393+7th+Ave,+New+York,+NY+10001,+USA/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89c259aeff181365:0xc1502e315e4fc90d?sa=X'
    },
    {
      label: 'Union Station, Chicago',
      address: '225 South Canal Street Chicago, Illinois 60606',
      googleMaps:
        'https://maps.google.com/maps/dir//225+S+Canal+St,+Chicago,+IL+60606,+USA/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x880e2cc0927438f1:0x12535cfc64fddcd2?sa=X'
    },
    {
      label: 'Emeryville Train Station',
      address: '5885 Horton St, Emeryville, CA 94608',
      googleMaps:
        'https://maps.google.com/maps/dir//5885+Horton+St,+Emeryville,+CA+94608,+USA/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x80857e5cc587495d:0x8ed117b223f8f911?sa=X'
    },
    {
      label: 'Hyatt Regency San Francisco',
      address: '5 Embarcadero Center, San Francisco, CA 94111-4800',
      googleMaps:
        'https://maps.google.com/maps/dir//Hyatt+Regency+San+Francisco,+5+Embarcadero+Center,+San+Francisco,+CA+94111,+USA/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x80858066b2ae7cab:0xfa369d8ed2b35dd6?sa=X'
    },
    {
      label: 'Hotel Erwin',
      address: '1697 Pacific Avenue  CA 90291',
      googleMaps:
        'https://maps.google.com/maps/dir//13480+Maxella+Ave,+Marina+Del+Rey,+CA+90292,+USA/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x80c2ba877395eec1:0xf963b97e508dbdda?sa=X'
    },
    {
      label: 'LAX Airport',
      address: '1 World Way, Los Angeles, CA 90045',
      googleMaps:
        'https://maps.google.com/maps/dir//Parking+7,+LAX,+1+World+Way,+Los+Angeles,+CA+90045,+USA/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x80c2b12972fa66ab:0x149fd0b5946b2ef8?sa=X'
    }
  ]
  const emergencyContacts = [
    {
      name: 'Zach Latta',
      phone: '(310) 801-7309'
    },
    {
      name: 'Christina Asquith',
      phone: '(617) 417-3773'
    },
    {
      name: 'Max Wofford',
      phone: '(310) 303-4221'
    },
    {
      name: 'Matthew Stanciu',
      phone: '(765) 412-5789'
    },
    {
      name: 'Zach Fogg',
      phone: '(240) 339-3356'
    },
    {
      name: 'Tina Soriano',
      phone: '(702) 596-7636'
    },
    {
      name: 'Woody Keppel',
      phone: '(802) 318-5521'
    },
    {
      name: 'Leo McElroy',
      phone: '(203) 644-6988'
    }
  ]
  
  const schedule = [
    {
      date: '15/07/2021',
      items: [
        {
          title: 'Welcomes Begin',
          time: '12:00pm',
          address:
            'Hilton Garden Burlington, 60 Battery St, Burlington, VT 05401, United States',
          googleMaps:
            'https://maps.google.com/maps/dir//hilton+burlington+vt+google+maps/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cca7af0f4a901e7:0x9387c428f4901901?sa=X'
        },
        {
          title: 'Optional Walk to City Market, Burlington',
          time: '4:00pm',
          description:
            'Shop for a picnic dinner of baguettes, cheeses, sliced salami and ham, grapes, watermelon, crackers, nuts, sliced tomatoes, pickles',
          address: 'Meet at the Hilton Garden Lobby at 4pm',
          googleMaps:
            'https://maps.google.com/maps/dir//hilton+burlington+vt+google+maps/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cca7af0f4a901e7:0x9387c428f4901901?sa=X'
        },
        {
          title: 'Picnic Dinner',
          time: '7:00pm',
          address: 'Lake Champlain Waterfront near Echo Museum'
        },
        {
          title: 'Exploration Time',
          time: '8:00pm',
          address: 'Church Street, Lake Champlain Chocolates for ice cream'
        },
        {
          title: 'Nighttime Curfew',
          time: '10:30pm',
          address:
            'Hilton Garden Burlington, 60 Battery St, Burlington, VT 05401, United States',
          googleMaps:
            'https://maps.google.com/maps/dir//hilton+burlington+vt+google+maps/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cca7af0f4a901e7:0x9387c428f4901901?sa=X'
        }
      ]
    },
    {
      date: '16/07/2021',
      items: [
        {
          title: 'Free Time',
          time: '9:00am',
          description: 'You must feed yourself.'
        },
        {
          title: 'Meet at Hilton Garden Lobby for Bus Pickup',
          time: '12:00pm departure',
          address:
            'Hilton Burlington, 60 Battery St, Burlington, VT 05401, United States',
          googleMaps:
            'https://maps.google.com/maps/dir//hilton+burlington+vt+google+maps/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cca7af0f4a901e7:0x9387c428f4901901?sa=X'
        },
        {
          title: 'Lunch and Spend time at HQ',
          time: '12:30pm',
          address: '15 Falls Road, Shelburne, VT, 05482'
        },
        {
          title: 'Bus Leaves HQ',
          time: '2:30pm',
          address: '15 Falls Road, Shelburne, VT, 05482'
        },
        {
          title: 'Games @ Shelburne Farms',
          time: '3:00pm',
          address: '1611 Harbor Rd, Shelburne, VT, 05482, United States'
        },
        {
          title: 'Bus Departs Shelburne Farms',
          time: '5:30pm',
          address: '1611 Harbor Rd, Shelburne, VT, 05482, United States'
        },
        {
          title: 'Adventures & dinner at Mt. Philo',
          time: '6:00pm',
          address: '7 Inn Rd, Charlotte, VT 05445'
        },
        {
          title: 'Bus Departs Mt. Philo',
          time: '10:00pm',
          address: '7 Inn Rd, Charlotte, VT 05445'
        },
        {
          title: 'Nighttime Curfew',
          time: '10:30pm',
          address:
            'Hilton Burlington, 60 Battery St, Burlington, VT 05401, United States',
          googleMaps:
            'https://maps.google.com/maps/dir//hilton+burlington+vt+google+maps/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cca7af0f4a901e7:0x9387c428f4901901?sa=X'
        }
      ]
    },
    {
      date: '17/07/2021',
      items: [
        {
          title: 'Breakfast',
          time: '7:00AM',
          address: 'Hilton Burlington Lobby'
        },
        {
          title: 'Bus Departs the Hilton to NYC',
          time: '7:45AM',
          address:
            'Hilton Burlington, 60 Battery St, Burlington, VT 05401, United States'
        },
        {
          title: 'NYC Exploration',
          time: '3:00PM',
          address: 'Begin in Battery Park'
        },
        {
          title: 'Dinner',
          time: '9:00PM',
          address: 'Bryant Park, Fountain near 6th Avenue and West 41st street'
        },
        {
          title: 'Enter Hotel',
          time: '10:30PM',
          address: 'Hilton Double Tree, 350 W 40th St, New York, NY 10018'
        }
      ]
    },
    {
      date: '18/07/2021',
      items: [
        {
          title: 'Free Morning Around NYC until 12:45pm',
          time: '8:00AM',

          description: "Opt-in MOMA Museum trip departs 10am",
          
        },
        {
          title: 'Announcement @ Hotel',
          time: '12:45PM',
          address: 'Hilton Double Tree, 350 W 40th St, New York, NY 10018'
        },
        {
          title: 'Depart from Hotel to Penn Station',
          time: '1:30PM',
          address: 'Penn Station: 8th and West 33rd Street, New York, NY'
        },
        {
          title: 'Train Departs Penn Station to Chicago & Hacking Begins',
          time: '3:40PM',
      
        }
      ]
    },
    {
      date: '19/07/2021',
      items: [
        {
          title: 'Get Ready to Debark onto platform and change trains',
          time: '9:30AM',
          description:
            "Make sure you've packed everything, things could go hectic."
        },
        {
          title: 'Debark Train at Chicago for layover and change to Zephyr Train',
          time: '9:50AM',
         
        },
        {
          title: 'River Walk around Chicago',
          time: '10:00AM',
          address: 'Depending on time, we\'ll walk around all together'
        },
        {
          title: 'Board Zephyr Train at Chicago',
          time: '1:30PM',
          address:  'Chicago\'s Union Train station'
        },
        {
          title: 'Dinner, first seating',
          time: '6:00PM'
        },
        {
          title: 'Dinner, second seating',
          time: '7:30PM'
        },
        {
          title: 'Fireside Chat with Tom Preston-Werner',
          time: '8:30PM'
    },
        ]
    },
    {
      date: '20/07/2021',
      items: [
        
        {
          title: 'Hackin\' all day',
        },
          {
          title: 'First Dinner',
          time: '5:30PM'
        },
        {
          title: 'Second Dinner',
          time: '7:00PM'
        },
        {
          title: 'HackerJazz Lounge Opens',
          time: '8:00PM'
        }
      ]
    },
    {
      date: '21/07/2021',
      items: [
        {
          title: 'Passing through the Rockies',
          time: '7:00AM'
        },
        {
          title: 'Disembark the Train',
          time: '4:15PM',
          description: 'Emeryville Station, bus to hotel'
        },
        {
          title: 'Hotel Hyatt Regency San Francisco',
          time: '6:00PM',
          address: '5 Embarcadero Center, San Francisco, CA 94111-4800'
        },     
        {
          title: 'Dinner plans afoot',
          time: '6:30PM',
        }
      ]
    },
    {
      date: '22/07/2021',
      items: [
        {
          title: 'Free Time & Get your own breakfast',
          time: '8:00AM'
        },
        {
          title: 'Optional: Cliff Stohl Visit in Oakland',
          time: '8:45AM',
          address: 'Hotel lobby'
        },
        {
          title: 'Optional: Vercel Meetup with Guillermo',
          time: '3:00PM',
          address: 'Vercel HQ, 650 California St, San Francisco, CA 94108'
        },
        {
          title: 'Dinner at Dolores Park',
          time: '7:00PM',
          address: '20th and Church (southwest corner/ the tallest part of park), San Francisco, CA'
        }
      ]
    },
    {
      date: '23/07/2021',
      items: [
        {
          title: 'Bus to Emeryville Train Station Departs',
          time: '6:45AM',
          address: 'Hotel lobby'
        },
        {
          title: 'Amtrak Train Departs',
          time: '8:20AM',
          address: 'Emeryville Station'
        },
        {
          title: 'Arrive in LA',
          time: '9:00PM',
          address: ''
        },
        {
          title: 'Bus Departs to Hotel Erwin',
          time: '9:05PM',
          address: 'Larry\'s Loft for dinner'
        }
      ]
    },
    {
      date: '24/07/2021',
      items: [
        {
          title: 'Continental Breakfast',
          time: '8:00AM',
          address: 'Hotel Meeting Room'
        },
        {
          title: 'Charter Bus to SpaceX Departs',
          time: '9:30AM',
          address: 'Hotel Lobby?'
        },
        {
          title: 'Sunset Dinner on beach',
          time: '7:00PM',
          address: 'Hotel lobby'
        }
      ]
    },
    {
      date: '25/07/2021',
      items: [
        {
          title: 'Charter Bus to LAX Departs',
          time: 'TBD',
          address: 'Hotel Lobby'
        }
      ]
    }
  ]
  return (
    <Box bg="rgba(1,28,54,1)">
      <Box
        sx={{
          minHeight: ['0vh', '40vh'],
          backgroundImage: `linear-gradient(262.98deg, rgba(196,77,77,0.7) 19.45%, rgba(196,77,77,0.7) 82.13%), url(https://cloud-16uu33t6r-hack-club-bot.vercel.app/0california_zephyr_colorado_river_western_colorado.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom right',
          display: 'flex',
          alignItems: 'flex-end'
        }}
      >
        <Container py={[3, 4]}>
          <Heading as="h1" sx={{ fontSize: [5, 7] }}>
            The Zephyr InfoHub
          </Heading>
        </Container>
      </Box>
      <Container pt={[3, 4]} bg="rgba(1,28,54,1)">
        <Grid sx={{ minHeight: '100vh' }} columns={[1, '2fr 1fr']}>
          <Box
            mt={'-24px'}
            pb={[7, 4]}
            sx={{
              display: currentPage == 'schedule' ? 'block' : ['none', 'block'],
              position: 'relative'
            }}
          >
            {schedule.map(day => (
              <Box key={day.date} sx={{ zIndex: 999 }}>
                <Heading mt={4} color="rgba(196,77,77,1)" sx={{ zIndex: 999 }}>
                  <Text sx={{ zIndex: 999, display: 'inline-block' }}>●</Text>{' '}
                  <Text ml={3} color="white">
                    {day.date}
                  </Text>
                </Heading>
                {day.items.map(event => (
                  <Box key={day.date + event.time}>
                    <Heading as="h3" mt={4} sx={{ display: 'flex' }}>
                      <Text sx={{ ml: '0.5px' }}>● </Text>
                      <Text ml={'25px'}>
                        {event.time}: {event.title}
                      </Text>
                    </Heading>
                    <Box sx={{ ml: '35px' }}>
                      <p>{event.description}</p>
                      <p>
                        <i>{event.address}</i>
                      </p>
                    </Box>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: currentPage == 'emergency' ? 'block' : ['none', 'block']
            }}
            pb={[7, 0]}
          >
            <Card bg="rgba(196,77,77,1)" sx={{ borderRadius: 2, p: [3, 3, 3] }}>
              <Heading>Emergency Contact Information</Heading>
              {emergencyContacts.map(({ name, phone }, i) => (
                <Box mt={3} key={phone}>
                  <b>{name}</b>:{' '}
                  <a href={`tel:${phone}`} target="_blank">
                    {phone}
                  </a>
                </Box>
              ))}
            </Card>
            <Card
              bg="rgba(196,77,77,1)"
              sx={{ borderRadius: 2, p: [3, 3, 3] }}
              mt={3}
            >
              <Heading>Key Addresses</Heading>
              {keyAddresses.map(({ label, googleMaps, address }, i) => (
                <Box mt={3} key={googleMaps}>
                  <b>{label}</b>:{' '}
                  <a href={googleMaps} target="_blank">
                    {address}
                  </a>
                </Box>
              ))}
            </Card>
          </Box>
        </Grid>
      </Container>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          py: 3,
          bg: 'black',
          width: '100vw',
          textAlign: 'center',
          justifyItems: 'center',
          justifyContent: 'center',
          display: ['flex', 'none'],
          textDecoration: 'underline'
        }}
      >
        <Text mr={3} onClick={() => setCurrentPage('schedule')}>
          Schedule
        </Text>
        <Text onClick={() => setCurrentPage('emergency')}>Emergency Info</Text>
      </Box>
    </Box>
  )
}
