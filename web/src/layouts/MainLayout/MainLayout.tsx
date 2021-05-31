import { Toaster } from '@redwoodjs/web/toast'

const MainLayout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="w-screen min-h-screen background flex flex-col justify-between">
      <Toaster
        position="bottom-right"
        toastOptions={{ success: { duration: 5000 } }}
      />
      <section className="container mx-auto py-8">
        {/* Image and Page Title */}
        <div className="pt-4 px-4 md:p-8 lg:h-1/3 w-full flex flex-col lg:flex-row justify-center items-center">
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
            <span className="text-center block text-xl md:text-2xl lg:text-4xl text-gray-400 my-2 lg:my-8 font-subdisplay">
              {' '}
              for B Street Theater{' '}
            </span>
            <span className="text-center block text-3xl md:text-5xl lg:text-7xl text-white text-sofiaGreen font-bold font-display">
              Artistic Director
            </span>
          </div>
        </div>
        {/* Dividing Line */}
        <div className="flex flex-col justify-center items-center my-6">
          <div className="w-3/4 h-0.5 bg-sofiaGreen"></div>
        </div>
        {/* Page Content */}
        <div className="w-full flex flex-col justify-center px-8 pb-8 lg:pt-4 overflow-hidden">
          {children}
        </div>
      </section>
      <section className="bg-sofiaGreen">
        <div className="container mx-auto py-8">
          <h2 className="text-white text-2xl font-display text-center mb-4">
            Who We Are
          </h2>
          <div className="flex flex-col justify-center items-center my-6">
            <div className="w-1/3 h-0.5 bg-white"></div>
          </div>
          <p className="text-white text-center p-8">
            Who are we? We are a group of actors, audience members, friends, and
            community members who wanted to create an easy way for others who
            support Lyndsay Burch to be heard by the B Street Board of
            Directors. We created this site out of our love for Lyndsay and B
            Street, and while Lyndsay is aware of this site, she has had no
            involvement in its creation or maintenance.{' '}
          </p>
        </div>
      </section>
    </div>
  )
}

export default MainLayout
