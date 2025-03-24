const CTA = () => {
  return (
    <section className="py-12 bg-cyan-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to know more about PM Fellowship?</h2>
              <p className="text-gray-600 mb-6">
                Schedule a call with our career counselor to get all your questions answered.
              </p>
              <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-md hover:bg-yellow-500">
                Schedule a Call
              </button>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="flex -space-x-4">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Counselor"
                    className="w-16 h-16 rounded-full border-2 border-white z-30"
                  />
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Counselor"
                    className="w-16 h-16 rounded-full border-2 border-white z-20"
                  />
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Counselor"
                    className="w-16 h-16 rounded-full border-2 border-white z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

