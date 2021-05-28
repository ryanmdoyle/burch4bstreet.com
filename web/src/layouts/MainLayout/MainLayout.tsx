const MainLayout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="w-screen h-screen background">
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

        <div className="flex flex-col justify-center items-center">
          <div className="w-1/2 h-0.5 bg-sofiaGreen"></div>
        </div>

        <section className="w-full flex flex-col justify-center p-8 overflow-hidden">
          {children}
        </section>
      </div>
    </div>
  )
}

export default MainLayout
