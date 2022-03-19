import "./Listing.css";
import Buttontype from "@material-ui/core/Button";
import CheckIcon from "@mui/icons-material/Check";

export default function HotelListing() {
  const features = ["Breakfast for 3", "Dinner included", "Pay at the hotel"];
  const features1 = [
    "Free Wi-Fi",
    "Cancellation policy",
    "Separate shower/bathtub",
  ];
  return (
    <div>
      {[1, 2, 3, 4, 5].map((ele) => (
        <>
          <div className="cart-cont">
            <div className="title">Deluxe Twin</div>
            <div className="card-flex-cont">
              <div className="card-img">
                <img
                  src="https://pix8.agoda.net/hotelImages/706/706611/706611_17030609240051380870.jpg?ca=6&ce=1&s=208x117&ar=16x9"
                  alt="logo"
                />
              </div>
              <div className="main-features">
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
              <div className="main-features">
                {features1 &&
                  features1.map((ele) => (
                    <div className="features-cont">
                      <div className="icon">
                        <CheckIcon />
                      </div>
                      <div className="text">{ele}</div>
                    </div>
                  ))}
              </div>
              <div>
                <div className="cost-cont">
                  <div className="save">SAVE 53% TODAY!</div>
                  <div className="strike">Rs. 42,286</div>
                  <div className="actual">Rs.19,947</div>
                </div>
              </div>
            </div>
            <div className="desc">
              <div>Description:</div>
              <div>
                Due to room availability, the cheapest option here is to book
                two separate rooms and change rooms during your stay.
              </div>
            </div>
            <div className="btn-cont">
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
        </>
      ))}
    </div>
  );
}
