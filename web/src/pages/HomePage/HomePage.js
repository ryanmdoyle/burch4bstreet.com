import SupportButton from 'src/components/SupportButton/SupportButton'

const HomePage = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mb-8 mt-4">
        <SupportButton />
      </div>
      <h2 className="font-display text-xl md:text-2xl text-sofiaGreen">
        Lyndsay is the Associate Artistic Director at B Street Theatre where she
        specializes in the development and production of new works and
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
          Cultivated B Street’s relationship with the National New Play Network,
          resulting in three Rolling World Premieres
        </li>
      </ul>
      <br></br>
      <p className="block font-display text-lg md:text-xl text-sofiaGreen mb-2">
        As a director and assistant director, Lyndsay has developed new plays
        with:
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
        Lynsday is the recipient of a generous grant from the Point West Rotary
        which enabled her to travel to Mumbai, India where she served as an
        Artist in Residence for the National Theatre Performing Arts Centre’s
        production of Gandhi: The Musical. In January 2017, Lyndsay served as
        the SDCF Observer to Carey Perloff on American Conservatory Theatre’s
        World Premiere adaptation of A Thousand Splendid Suns. Lyndsay is an
        alum of Lincoln Center’s Directors Lab West and Elon University’s BFA
        Acting Program. She is a current participant in Theatre Bay Area&apos;s
        ATLAS Program for Directors. SDC Associate Member.
      </p>
    </>
  )
}

export default HomePage
