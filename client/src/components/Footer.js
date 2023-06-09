import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import DonateButton from "./pages/DonateButton";
// import semantic cridder 20230415113508
import {
	Container,
	Divider,
	Grid,
	Header,
	List,
	Segment,
} from "semantic-ui-react";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// function to update year automatically cridder 20230415113513
function Copyright() {
	const year = new Date().getFullYear();
	return <div>&copy; {year} Team Falcon &trade;</div>;
}

function Footer() {
	return (
		<footer
			style={{
				// position: "fixed",
				left: "0",
				bottom: "0",
				width: "100%",
				border: "none",
				backgroundColor: "#255f85",
				color: "black",
				// color: 'white',
				// padding: '15px 32px',
				// textAlign: 'center',
				// textDecoration: 'none',
				// display: 'inline-block',
				// fontSize: '16px',
				// margin: '4px 2px',
				// cursor: 'pointer'
			}}>
			<Segment vertical style={{ padding: "0em 0em" }}>
				<Container>
					<Grid divided stackable>
						<Grid.Row>
							<Grid.Column width={5}>
								<Header as="h4" content="About" />
								<List link>
									<List.Item as="a">Contact Us</List.Item>
									<List.Item>
										<Copyright />
									</List.Item>
								</List>
							</Grid.Column>
							<Grid.Column width={5}>
								<Header as="h4">Donate to fund this site!</Header>
								<Elements stripe={stripePromise}>
									<DonateButton />
								</Elements>
							</Grid.Column>
						</Grid.Row>
					</Grid>
					<Divider section />
				</Container>
			</Segment>
		</footer>
	);
}

export default Footer;