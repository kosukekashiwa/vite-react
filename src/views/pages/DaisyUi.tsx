import { BeakerIcon } from '@heroicons/react/24/solid'

const DaisyUi: React.FC = () => {
  return (
    <div>
      <button className="btn btn-primary">One</button>
      <button className="btn btn-secondary">Two</button>
      <button className="btn btn-accent btn-outline">Three</button>
      <div>
        <BeakerIcon className="h-6 w-6 text-blue-500" />
      </div>
    </div>
  )
}

export default DaisyUi
