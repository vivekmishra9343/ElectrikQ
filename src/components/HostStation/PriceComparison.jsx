import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Free Registration',
    id: 'tier-free',
    href: '#',
    priceMonthly: '₹0',
    description: "Get started with essential features to list and manage your charging station.",
    features: [
      'Basic map listing',
      'Standard search visibility',
      'Basic analytics (views, usage)',
      'Self-manage availability',
      'Simple booking tools',
    ],
    featured: false,
  },
  {
    name: 'Premium Registration',
    id: 'tier-premium',
    href: '#',
    priceMonthly: '₹999',
    description: 'Advanced tools and visibility to boost your charging business.',
    features: [
      'Priority in map & search results',
      'Featured station marker',
      'Advanced analytics dashboard',
      'Automated availability updates',
      'Marketing tools & offers',
      'Dedicated support',
      'Charging rate optimization',
      'Seasonal trend insights',
      'EV model compatibility filters',
    ],
    featured: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function RegistrationPricing() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-indigo-600">Registration Plans</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Choose the plan that fits your charging station goals
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600">
        Start for free or unlock advanced tools and visibility with the premium plan. Designed for all kinds of hosts.
      </p>
      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-2">
        {tiers.map((tier, idx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'bg-gray-900 text-white shadow-2xl' : 'bg-white text-gray-900 border',
              'rounded-3xl p-8 ring-1 ring-gray-200 sm:p-10'
            )}
          >
            <h3 id={tier.id} className="text-lg font-semibold text-indigo-600">
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-4xl font-bold">{tier.priceMonthly}</span>
              <span className="text-base text-gray-500">/month</span>
            </p>
            <p className="mt-4 text-base">{tier.description}</p>
            <ul className="mt-6 space-y-3 text-sm">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-2 items-start">
                  <CheckIcon
                    className={classNames(
                      tier.featured ? 'text-indigo-400' : 'text-indigo-600',
                      'h-5 w-5 mt-1'
                    )}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 ring-1 ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-6 inline-block w-full rounded-md px-4 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2'
              )}
            >
              Get started
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
