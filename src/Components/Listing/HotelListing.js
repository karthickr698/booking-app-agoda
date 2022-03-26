import "./Listing.css";
import Buttontype from "@material-ui/core/Button";
import CheckIcon from "@mui/icons-material/Check";

import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import DateRangePicker from "@mui/lab/DateRangePicker";
import Popover from "@mui/material/Popover";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";

import Door from "../../asset/image/door.svg";
import ferrisWheel from "../../asset/image/ferrisWheel.svg";
import location from "../../asset/image/location.svg";
import transfer from "../../asset/image/transfer.svg";
import StarRatings from "react-star-ratings";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import SignalWifi4BarSharpIcon from "@mui/icons-material/SignalWifi4BarSharp";
import BedSharpIcon from "@mui/icons-material/BedSharp";
import BedroomChildOutlinedIcon from "@mui/icons-material/BedroomChildOutlined";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";

import ManIcon from "@mui/icons-material/Man";

export default function HotelListing() {
  const features = ["Breakfast for 3", "Dinner included", "Pay at the hotel"];
  const highlights = [
    {
      name: "Located in heart of Bangalore",
      image: location,
    },
    {
      name: "Front desk [24-hour]",
      image: Door,
    },
    {
      name: "Airport transfer",
      image: transfer,
    },
    {
      name: "Inside city center",
      image: location,
    },
    {
      name: "730 meters to UB City",
      image: ferrisWheel,
    },
  ];

  const featuresData = [
    {
      name: "Housekeeping",
      count: 5,
    },
    {
      name: "Breakfast",
      count: 20,
    },
    {
      name: "Food & Dining",
      count: 5,
    },
  ];
  const features1 = [
    "Free Wi-Fi",
    "Cancellation policy",
    "Separate shower/bathtub",
  ];

  const [roomsState, setRoomsState] = React.useState({
    rooms: 1,
    adults: 2,
    children: 0,
  });
  const [value, setValue] = React.useState([null, null]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (name, val) => {
    setRoomsState({ ...roomsState, [name]: val });
  };

  const roomFeatures = [
    { name: "Free Wi-Fi", image: SignalWifi4BarSharpIcon },
    { name: "1 queen bed or 2 single beds or 1 king bed", image: BedSharpIcon },
    {
      name: "Room size: 36 m²/388 ft²",
      image: BedroomChildOutlinedIcon,
    },
    {
      name: "Non-smoking",
      image: SmokeFreeIcon,
    },
    {
      name: "Shower and bathtub",
      image: BathtubOutlinedIcon,
    },
  ];

  const availableData = [...features, ...features1];

  return (
    <div>
      <div className="header-cont">
        <div className="header-flex-cont">
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DateRangePicker
                  startText="Check-in"
                  endText="Check-out"
                  value={value}
                  minDate={new Date()}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} className="customeInput" />
                      <Box sx={{ mx: 2 }}> </Box>
                      <TextField {...endProps} className="customeInput" />
                    </React.Fragment>
                  )}
                />
              </Stack>
            </LocalizationProvider>
          </div>
          <div>
            <div>
              <div
                className="person-select"
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
              >
                <PeopleOutlineIcon className="icon" />
                <div className="display-text">
                  <div>
                    {roomsState.adults} adults{" "}
                    {roomsState.children > 0 && (
                      <>, {roomsState.children} children </>
                    )}
                  </div>
                  <div className="icon">{roomsState.rooms} room</div>
                </div>
                <KeyboardArrowDownIcon className="icon" />
              </div>
            </div>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div className="popover-cont">
                <div className="btn-cont">
                  <MinimizeIcon
                    onClick={() =>
                      handleChange(
                        "rooms",
                        roomsState.rooms === 0 ? 0 : roomsState.rooms - 1
                      )
                    }
                    className="event-icon"
                  />
                  <div className="count-text">
                    {roomsState.rooms}{" "}
                    {roomsState.rooms > 1 ? (
                      <span className="icon">rooms</span>
                    ) : (
                      <span className="icon">room</span>
                    )}
                  </div>
                  <AddIcon
                    onClick={() => handleChange("rooms", roomsState.rooms + 1)}
                    className="event-icon"
                  />
                </div>
                <hr />
                <div className="btn-cont">
                  <MinimizeIcon
                    onClick={() =>
                      handleChange(
                        "adults",
                        roomsState.adults === 0 ? 0 : roomsState.adults - 1
                      )
                    }
                    className="event-icon"
                  />
                  <div className="count-text">
                    {roomsState.adults}{" "}
                    {roomsState.adults > 1 ? (
                      <span className="icon">adults</span>
                    ) : (
                      <span className="icon">adult</span>
                    )}
                  </div>
                  <AddIcon
                    onClick={() =>
                      handleChange("adults", roomsState.adults + 1)
                    }
                    className="event-icon"
                  />
                </div>
                <hr />
                <div className="btn-cont">
                  <MinimizeIcon
                    onClick={() =>
                      handleChange(
                        "children",
                        roomsState.children === 0 ? 0 : roomsState.children - 1
                      )
                    }
                    className="event-icon"
                  />
                  <div className="count-text">
                    {roomsState.children}{" "}
                    {roomsState.children > 1 ? (
                      <span className="icon">childrens</span>
                    ) : (
                      <span className="icon">children</span>
                    )}
                  </div>
                  <AddIcon
                    onClick={() =>
                      handleChange("children", roomsState.children + 1)
                    }
                    className="event-icon"
                  />
                </div>
              </div>
            </Popover>
          </div>
          <div className="search-btn">
            <Buttontype
              onClick={() => {
                console.log();
              }}
            >
              Search
            </Buttontype>
          </div>
        </div>
      </div>

      <div className="listing-cont">
        <div className="over-View-cont">
          <div className="hotel-overview">
            <div className="hotel-name">
              <div className="name">
                The Chancery Pavillion Hotel
                <span>
                  <StarRatings
                    rating={3.5}
                    starRatedColor="#ffa726"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                    name="rating"
                  />
                </span>
              </div>
              <div className="address">
                No. 135, Residency Road,, Bangalore City Center, Bangalore,
                India, 560025
              </div>
            </div>
            <div className="hotel-name">
              <div className="heading">Highlights</div>
              <div className="image-cont">
                {highlights &&
                  highlights.map((ele) => (
                    <div className="item-cont">
                      <div>
                        <img src={ele.image} alt="door" />
                      </div>
                      <div style={{ paddingTop: 10 }}>{ele.name} </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="hotel-view">
            <div className="count-cont">
              <div className="count">7.5</div>
              <div className="reviews-txt">
                <div>Very Good</div>
                <div>962 reviews</div>
              </div>
            </div>
            <div className="feat-overall">
              {featuresData &&
                featuresData.map((ele) => (
                  <div className="feat-cont">
                    {ele.name}
                    <span style={{ paddingLeft: 10 }}>{ele.count}</span>
                    <span style={{ paddingLeft: 5, fontSize: 10 }}>
                      <ThumbUpAltSharpIcon />
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="all-features">
          <div className="heading">Facilities</div>
          <div className="all-features-view">
            {availableData &&
              availableData.map((ele) => (
                <div className="features-cont features-cont1">
                  <div className="icon">
                    <CheckIcon />
                  </div>
                  <div className="text">{ele}</div>
                </div>
              ))}
          </div>
        </div>
        {[1, 2, 3, 4, 5].map((ele) => (
          <>
            <div className="cart-cont">
              <div className="title">Deluxe Twin</div>
              <div className="card-flex-cont">
                <div className="image-code-cont">
                  <div className="card-img">
                    <img
                      src="https://pix8.agoda.net/hotelImages/706/706611/706611_17030609240051380870.jpg?ca=6&ce=1&s=208x117&ar=16x9"
                      alt="logo"
                    />

                    <div className="card-features">
                      <div className="card-features-main">
                        {roomFeatures &&
                          roomFeatures.map((ele) => {
                            const Item = ele.image;
                            return (
                              <div className="card-features-main-inner">
                                <div className="icon">
                                  <Item />
                                </div>
                                <div>{ele.name}</div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-view-cont">
                  <div className="item-1">
                    <div>Benefits</div>
                    <div className="item-back main-features">
                      <div style={{ paddingBottom: 10 }}>
                        Your price includes:
                      </div>
                      {features &&
                        features.map((ele) => (
                          <div className="features-cont">
                            <div className="icon">
                              <CheckIcon />
                            </div>
                            <div className="text">{ele}</div>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="item-2">
                    <div>Sleeps</div>
                    <div className="item-back">
                      <ManIcon />
                      <ManIcon />
                    </div>
                  </div>
                  <div className="item-3">
                    <div>Price per night</div>
                    <div className="item-back cost-cont">
                      <div className="save">SAVE 53% TODAY!</div>
                      <div className="strike">Rs. 42,286</div>
                      <div className="actual">Rs.19,947</div>
                    </div>
                  </div>
                  <div className="item-4">
                    <div>Rooms</div>
                    <div className="item-back">
                      <div className="room-count">10</div>
                    </div>
                  </div>
                  <div className="item-5">
                    <div>Most booked</div>
                    <div className="item-back">
                      <div className="buton">
                        <Buttontype
                          onClick={() => {
                            console.log();
                          }}
                        >
                          Book Now
                        </Buttontype>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
