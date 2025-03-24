const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "What is the duration of the Product Management Fellowship?",
      answer:
        "The Product Management Fellowship is a 24-week intensive program designed to transform you into a job-ready product manager.",
    },
    {
      id: 2,
      question: "Do I need prior experience to join the fellowship?",
      answer:
        "No, the program is designed for both beginners and professionals looking to transition into product management. We have separate tracks based on your experience level.",
    },
    {
      id: 3,
      question: "How is the placement assistance provided?",
      answer:
        "We provide comprehensive placement assistance including resume building, interview preparation, mock interviews with industry experts, and direct referrals to our hiring partners.",
    },
    {
      id: 4,
      question: "What is the fee structure and are there any scholarships available?",
      answer:
        "The program fee is ₹23,999. We offer merit-based scholarships and flexible payment options. You can also opt for our income share agreement where you pay after getting placed.",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-4 flex justify-between items-center bg-gray-50">
                  <h3 className="font-medium text-gray-900">{faq.question}</h3>
                  <button className="text-gray-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

