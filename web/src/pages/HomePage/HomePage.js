import { navigate, routes } from '@redwoodjs/router'

import SupportButton from 'src/components/SupportButton/SupportButton'

const HomePage = () => {
  navigate(routes.comingSoon())
  return (
    <>
      <div className="w-full flex justify-center items-center mb-8">
        <SupportButton />
      </div>
      <p className="font-display text-lg text-sofiaGreen">
        Since October of 2013, Lyndsay Burch has been working to elevate and
        expand the work of B Street Theatre. Her passion and leadership have
        been instrumental in taking B Street Theatre from the “little shack by
        the railroad tracks” to international stages and firmly cementing the
        company as a cornerstone of Sacramento professional theatre as the
        company transitioned into their new home, The Sofia Tsakopoulos Center
        for the Performing Arts.
      </p>
      <br></br>
      <h3 className="font-display text-xl text-sofiaGreen">
        Success & Expansion
      </h3>
      <p className="font-body text-gray-800">
        During Lyndsay’s time with the theatre, Actor’s Equity Association
        re-evaluated the company’s contract level from SPT 10 and SPT 8 to LORT
        D, raising B Street Theatre’s prestige and profile on a national level.
        She was directly involved in conversations that led to this
        re-evaluation and is uniquely poised to understand the changes and
        national expectations that come with this new level of operation.
      </p>
      <br></br>
      <p className="font-body text-gray-800">
        In addition to managing the move into The Sofia, Lyndsay also managed
        and produced B Street Theatre’s 2014 International Tour of Around the
        World in 80 Days which traveled to three venues in India. Nationally,
        Lyndsay continues to cultivate B Street’s relationship with national
        organizations such as Theatre Communications Group, Theatre Bay Area and
        the National New Play Network (NNPN). B Street’s relationship with NNPN
        has resulted in two Rolling World Premieres under Lyndsay’s direction as
        well as the creation of the nationally-recognized New Comedies Festival
        and the New American Theatre Festival (in partnership with In The Margin
        Theatre Company).
      </p>
      <br></br>
      <h3 className="font-display text-xl text-sofiaGreen">
        Diversity & Inclusion
      </h3>
      <p className="font-body text-gray-800">
        As many theatre companies across the country struggled (and occasionally
        failed) to examine their diversity, equity, and inclusion practices in
        the wake of the murder of George Floyd in 2020, Lyndsay had already been
        leading the way. For years, Lyndsay had been actively implementing
        color-conscious and diverse casting practices when hiring actors and
        selecting scripts. Behind the scenes, she has continually brought in
        BIPOC and LGBTQIA designers and partnered with minority-led
        organizations, all while working to make sure that the theatre is a safe
        and inclusive working environment for minority artists.
      </p>
      <br></br>
      <p className="font-body text-gray-800">
        With the creation of “Re-Imagine,” the virtual theatre offering
        dedicated to voicing the stories of BIPOC individuals, B Street
        continues to prove its ability to further expand its commitment to
        inclusion and diversity. “Re-Imagine” gives BIPOC artists time and space
        to produce work they are passionate about while also introducing the B
        Street audience to artists that they may not otherwise encounter. Under
        the leadership of Lyndsay Burch, B Street Theatre will continue on the
        current trajectory of becoming a more inclusive and equitable space.
      </p>
      <br></br>
      <h3 className="font-display text-xl text-sofiaGreen">
        Sacramento&apos;s Choice
      </h3>
      <p className="font-body text-gray-800">
        If not for Lyndsay’s tenacity, B Street would not have made it through
        2020 with such success. She has been at the helm of the digital theatre
        offerings that were brought to the B Street audience day after day,
        night after night, keeping the community engaged during a time when
        being together physically was not an option. Her leadership has been
        recognized twice by the Sacramento Business Journal; she was named one
        of their “40 Under 40” in 2017 and was one of the “Women Who Mean
        Business” honorees this year (2021). She not only has the support of the
        theatre company she’s been leading courageously, she has the support of
        the community in which B Street is a pillar.
      </p>
      <div className="w-full flex justify-center items-center mt-12">
        <SupportButton />
      </div>
    </>
  )
}

export default HomePage
