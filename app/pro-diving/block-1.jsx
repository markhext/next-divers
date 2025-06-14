import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Inclusive Expertise',
    description:
      'We have extensice experience in guiding candidates a disability and are aproud of it.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Transparent and Honest',
    description: 'You know exactly what you are choosing and payiong for.',
    icon: LockClosedIcon,
  },
  {
    name: 'Strong network and mentoring program',
    description: 'You are not left alone after your IE. We also help grow as a PADI PRO afterwards',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Tailored teaching',
    description: 'Everyone learns differently. We tune into your needs.',
    icon: LockClosedIcon,
  },
]

export default function Block1() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Why become a Pro with NEXT Divers?
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                The new standard for PADI Pros in Holland
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              alt="Product screenshot"
              src="/adaptive.jpg"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


// <Image src="/padi-idc.png" width={197} height={256} alt="padi" />
