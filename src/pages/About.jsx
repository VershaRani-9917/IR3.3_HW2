import Footer from "../components/Footer";
import Header from "../components/Header"

function About(){
	return(
		<>
    <Header/>
		<main className="container py-4">
			<h1>About Airbnb</h1>
			<div>
			<p>Airbnb began in 2008 when 2 designers who had space to share hosted 3 travellers looking for a place to stay. Now, millions of hosts and guests have created free Airbnb accounts to enjoy each other’s unique view of the world.</p>
			
			

			<p>From cosy cottages to elegant penthouses, hosts are happy to share their places. Whether it’s a work trip, weekend getaway, family holiday or a longer stay, there are millions of amazing places to visit.</p>


			<p>Then there are Airbnb Experiences, hosted by inspiring local experts. From horse whispering to canyon hiking, experience hosts share their passion for cooking, art, music and so much more.</p>


			<p>TOr local guides take small groups off the beaten trail into more unexplored territories with Airbnb Adventures for fully immersive expeditions.

On the business front, Airbnb for Work has everything needed to do your job on the road, from top-rated places and collaborative spaces to team-building experiences and administrative tools that make managing travel easier than ever.</p>
</div>
	</main>
		<Footer/>
		</>
	)
}

export default About;