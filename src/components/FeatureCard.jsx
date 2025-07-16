import Card from './ui/Card'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card hover className="p-6">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-gray-800 font-semibold mb-2 text-lg">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </Card>
  )
}

export default FeatureCard
