const HomePage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="container mx-auto h-full">
        <section className="p-4 md:p-8 lg:h-1/3 w-full flex flex-col lg:flex-row justify-center items-center">
          <div className="w-1/2 lg:w-1/4 xl:w-1/5 lg:h-full flex justify-center items-center">
            <img
              src="/lyndsay.jpeg"
              alt="headshot"
              className="rounded-full"
            ></img>
          </div>
          <div className="h-2/3 lg:w-2/3 lg:h-full flex justify-center items-center flex-col py-4 md:py-8">
            <span className="text-center block text-3xl md:text-5xl lg:text-7xl text-white text-sofiaGreen font-bold font-display">
              Lyndsay Burch
            </span>
            <span className="text-center block text-xl md:text-2xl lg:text-4xl text-gray-400 font-body my-2 lg:my-8 font-subdisplay">
              {' '}
              for B Street Theater{' '}
            </span>
            <span className="text-center block text-3xl md:text-5xl lg:text-7xl text-white text-sofiaGreen font-bold font-display">
              Artistic Director
            </span>
          </div>
        </section>

        <div className="flex justify-center items-center">
          <div className="w-1/2 h-0.5 bg-sofiaGreen"></div>
        </div>

        <section className="w-full flex flex-col justify-center p-8 overflow-hidden">
          <h2 className="font-display text-xl md:text-2xl text-sofiaGreen">
            Lyndsay is the Associate Artistic Director at B Street Theatre where
            she specializes in the development and production of new works and
            contemporary plays.
          </h2>
          <br></br>
          <p className="block font-display text-lg md:text-xl text-sofiaGreen mb-2">
            In her time at B Street, Lyndsay has directed:
          </p>
          <ul className="font-body text-gray-800 list-disc list-inside">
            <li>Ten Equity productions</li>
            <li>Directed and written for four touring productions</li>
            <li>Recruited three full-time intern companies</li>
            <li>Produced a three-city International Tour to India</li>
            <li>Cast over 50 productions</li>
            <li>
              Cultivated B Street’s relationship with the National New Play
              Network, resulting in three Rolling World Premieres
            </li>
          </ul>
          <br></br>
          <p className="block font-display text-lg md:text-xl text-sofiaGreen mb-2">
            As a director and assistant director, Lyndsay has developed new
            plays with:
          </p>
          <ul className="font-body text-gray-800 list-disc list-inside">
            <li>B Street Theatre</li>
            <li>Actor’s Theatre of Charlotte</li>
            <li>The National Showcase of New Plays</li>
            <li>Sacramento Theatre Company</li>
            <li>The Dramatist Guild Footlight Series</li>
            <li>The Eugene O’Neill Theater Center</li>
            <li>Hangar Theatre and Berkshire Theatre Group</li>
            <li>And others...</li>
          </ul>
          <br></br>
          <p className="font-body text-gray-800">
            Lynsday is the recipient of a generous grant from the Point West
            Rotary which enabled her to travel to Mumbai, India where she served
            as an Artist in Residence for the National Theatre Performing Arts
            Centre’s production of Gandhi: The Musical. In January 2017, Lyndsay
            served as the SDCF Observer to Carey Perloff on American
            Conservatory Theatre’s World Premiere adaptation of A Thousand
            Splendid Suns. Lyndsay is an alum of Lincoln Center’s Directors Lab
            West and Elon University’s BFA Acting Program. She is a current
            participant in Theatre Bay Area&apos;s ATLAS Program for Directors.
            SDC Associate Member.
          </p>
        </section>
      </div>
    </div>
  )
}

export default HomePage
