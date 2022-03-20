import React, { useCallback } from "react";
import useRazorpay from "react-razorpay";
import TextField from "@mui/material/TextField";
import Buttontype from "@material-ui/core/Button";
import "./Checkout.css";
import "./Listing.css";
import { useHistory } from "react-router-dom";

const Checkout = (props) => {
	const history = useHistory();
	const Razorpay = useRazorpay();

	const handlePayment = useCallback(() => {
		const options = {
			key: "rzp_test_IdisrFxy6CI5mb",
			amount: `${parseInt(Math.random() * 1000000)}`,
			currency: "INR",
			name: "Hotel management",
			description: "Test Transaction",
			image: "https://example.com/your_logo",
			handler: (res) => {
				console.log(res);
				history.push("/");
			},
			prefill: {
				name: "Dev Ganesh",
				email: "testing@example.com",
				contact: "9087638144",
			},
			notes: {
				address: "Chennai test address",
			},
			theme: {
				color: "#3399cc",
			},
		};

		const rzpay = new Razorpay(options);
		rzpay.open();
	}, [Razorpay]);
	return (
		<div>
			<div
				data-component="great-choice-banner"
				className="Box-sc-kv6pi1-0 gkjaTT Alertstyled__AlertContainer-sc-14mnkdt-0 dkrxdC"
			>
				<div className="Box-sc-kv6pi1-0 YQCOw">
					<span className="Spanstyled__SpanStyled-sc-16tp9kb-0 lfpNCX kite-js-Span ">
						<span className="Spanstyled__SpanStyled-sc-16tp9kb-0 OXuBB kite-js-Span ">
							Great choice of property
						</span>
						<span> - with an average guest rating of </span>
						<span className="Spanstyled__SpanStyled-sc-16tp9kb-0 OXuBB kite-js-Span ">
							8.2
						</span>
						<span> from </span>
						<span>4338</span>
						<span> reviews</span>
					</span>
				</div>
			</div>
			<div className="formField">
				<h3>Let us know who you are</h3>
				<TextField label="Full Name" variant="outlined" />
				<TextField label="Email" variant="outlined" />
				<TextField label="Phone number (Optional)" variant="outlined" />
				<div className="btn-cont">
					<div className="buton">
						<Buttontype onClick={handlePayment}>
							Proceed to Pay
						</Buttontype>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
