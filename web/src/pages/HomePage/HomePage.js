import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <div className="w-screen h-screen">
      <section className="h-1/2 flex justify-center items-center">
        <div className="w-1/2 h-full flex justify-center items-center bg-red-100m pl-12">
          <img
            src="/lyndsay.jpeg"
            alt="headshot"
            className="rounded-full"
          ></img>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center pr-12">
          <h1>
            <span className="text-7xl text-white text-sofiaGreen font-bold font-display">
              Lyndsay Burch
            </span>
            <br></br>
            <span className="italic font-normal mt-4 mb-4 font-body text-4xl">
              {' '}
              for{' '}
            </span>
            <br></br>
            <span className="text-7xl text-white text-sofiaGreen font-bold font-display">
              B Street
            </span>
          </h1>
        </div>
      </section>
      <div className="flex justify-center items-center">
        <div className="w-1/2 h-0.5 bg-sofiaGreen"></div>
      </div>
      <section className="h-1/2 flex justify-center items-center mx-12">
        <p>
          Lyndsay is the Associate Artistic Director at B Street Theatre where
          she specializes in the development and production of new works and
          contemporary plays. In her time at B Street, Lyndsay has directed ten
          Equity productions, directed and written for four touring productions,
          recruited three full-time intern companies, produced a three-city
          International Tour to India, cast over 50 productions, and cultivated
          B Street’s relationship with the National New Play Network, resulting
          in three Rolling World Premieres. As a director and assistant
          director, Lyndsay has developed new plays with B Street Theatre,
          Actor’s Theatre of Charlotte, the National Showcase of New Plays,
          Sacramento Theatre Company, the Dramatist Guild Footlight Series, the
          Eugene O’Neill Theater Center, Hangar Theatre and Berkshire Theatre
          Group, among others. She is the recipient of a generous grant from the
          Point West Rotary which enabled her to travel to Mumbai, India where
          she served as an Artist in Residence for the National Theatre
          Performing Arts Centre’s production of Gandhi: The Musical. In January
          2017, Lyndsay served as the SDCF Observer to Carey Perloff on American
          Conservatory Theatre’s World Premiere adaptation of A Thousand
          Splendid Suns. Lyndsay is an alum of Lincoln Center’s Directors Lab
          West and Elon University’s BFA Acting Program. She is a current
          participant in Theatre Bay Area's ATLAS Program for Directors. SDC
          Associate Member.
        </p>
      </section>
    </div>
  )
}

export default HomePage
