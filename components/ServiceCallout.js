import Link from 'next/link'
import Image from 'next/image';

const ServiceCallout = () => (
  <div id="service-callout">
    <section className="grid-wrapper">
      <ul className="grid photo-grid grid-3">
        <li className="card goal">
          <Link href="/experiences/animal-encounters/orcas">
            <a>
            <div className="card-description-wrapper">
              <div className="card-description">
                <span className="card-title">Orcas</span>
                <span className="card-info">View providers</span>
              </div>
            </div>
            </a>
          </Link>
        </li>
        <li className="card goal">
          <Link href="/experiences/animal-encounters/whale-sharks">
            <a>
            <div className="card-description-wrapper">
              <div className="card-description">
                <span className="card-title">Whale Sharks</span>
                <span className="card-info">View providers</span>
              </div>
            </div>
            </a>
          </Link>
        </li>
        <li className="card goal">
          <Link href="/experiences/animal-encounters/green-sea-turtles">
            <a>
            <div className="card-description-wrapper">
              <div className="card-description">
                <span className="card-title">Green Sea Turtles</span>
                <span className="card-info">View providers</span>
              </div>
            </div>
            </a>
          </Link>
        </li>
      </ul>
    </section>
  </div>
)

export default ServiceCallout;