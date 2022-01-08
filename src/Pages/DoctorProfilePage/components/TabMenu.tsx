function TabMenu() {
    return (
      <nav className="user-tabs mb-4">
      <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
        <li className="nav-item">
          <a className="nav-link active" href="#doc_overview" data-toggle="tab">Overview</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#doc_locations" data-toggle="tab">Locations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#doc_reviews" data-toggle="tab">Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#doc_business_hours" data-toggle="tab">Business Hours</a>
        </li>
      </ul>
    </nav>
    )
  }
export default TabMenu