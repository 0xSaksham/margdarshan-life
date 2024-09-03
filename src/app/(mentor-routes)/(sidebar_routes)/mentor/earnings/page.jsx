import SingleEarning from "./single_earning"

export default function Earnings() {
  const earningsData = [
    {
      type: "video",
      studentName: "Jackson",
      sessionTitle: "How to learn React?",
      date: "02/09/2024",
      time: "10:00",
      rating: 4.5,
      amount: "10,000",
    },
    {
      type: "video",
      studentName: "Jackson",
      sessionTitle: "How to learn React?",
      date: "02/09/2024",
      time: "10:00",
      rating: 4.5,
      amount: "10,000",
    },
    {
      type: "video",
      studentName: "Jackson",
      sessionTitle: "How to learn React?",
      date: "02/09/2024",
      time: "10:00",
      rating: 4.5,
      amount: "10,000",
    },
    {
      type: "video",
      studentName: "Jackson",
      sessionTitle: "How to learn React?",
      date: "02/09/2024",
      time: "10:00",
      rating: 4.5,
      amount: "10,000",
    },
    {
      type: "video",
      studentName: "Jackson",
      sessionTitle: "How to learn React?",
      date: "02/09/2024",
      time: "10:00",
      rating: 4.5,
      amount: "10,000",
    },
    {
      type: "video",
      studentName: "Jackson",
      sessionTitle: "How to learn React?",
      date: "02/09/2024",
      time: "10:00",
      rating: 4.5,
      amount: "10,000",
    },

    // Add more earnings data objects here
  ]

  return (
    <div className="px-4 py-8 flex flex-col h-full gap-4">
      <h1 className="text-3xl font-bold">Earnings</h1>
      <div className="flex flex-col w-full h-full overflow-y-auto">
        {earningsData.map((earning, index) => (
          <SingleEarning
            key={index}
            type={earning.type}
            studentName={earning.studentName}
            sessionTitle={earning.sessionTitle}
            date={earning.date}
            time={earning.time}
            rating={earning.rating}
            amount={earning.amount}
          />
        ))}
      </div>
    </div>
  )
}
