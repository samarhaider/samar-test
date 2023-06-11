### DB schema

users
- id
- name
- status

routes
- id
- from
- to
- from_latitude
- from_longitude
- to_longitude
- to_latitude

route_stops
- id
- route_id
- position
- name
- latitude
- longitude


vehicle
- id
- name
- type
- total_seats


trips
- id
- start_date_time
- vehicle_id
- route_id


booking
- id
- trip_id
- user_id
- seat_number
- status






